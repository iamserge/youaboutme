reviews = new Mongo.Collection('reviews', {
    schema: new SimpleSchema({
        content: {
            type: String
        },
        reviewee: {
            type: String
        },
        authorUsername: {
            type: String
        },
        cartegoryname: {
            type: String
        },
        categoryid: {
             type: String
        },
        createdAt: {
            type: Date,
            denyUpdate: true
        }
    })
});

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Meteor.methods({
        reviewInsert: function(reviewAttributes) {
            check(Meteor.user().username, String);
            check(reviewAttributes, {
                content: String,
                categoryId: String
            });
            var user = Meteor.user();
            var review = _.extend(reviewAttributes, {
                username: user.username,
                createdAt: new Date()
            });
            // Update reviews count
            userCategories.update({_id: reviewAttributes.categoryId},{'$inc': {'reviewsCount' : 1}});
            var reviewId = reviews.insert(review);
            return {
                _id: reviewId
            };
        }
    });
}
