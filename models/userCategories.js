userCategories = new Mongo.Collection('userCategories', {
  schema: new SimpleSchema({
    categoryname: {
        type: String
    },
    description: {
        type: String
    },
    username: {
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
        userCategoryInsert: function(userCategoryAttributes) {
            check(Meteor.user().username, String);
            check(userCategoryAttributes, {
                categoryname: String,
                description: String
            });
            var user = Meteor.user();
            var userCategory = _.extend(userCategoryAttributes, {
                username: user.username
            });
            var userCategoryId = userCategories.insert(userCategory);
            return {
                _id: userCategoryId
            };
        },
        getNumberOfReviews: function (categoryId) {
            return reviews.find({categoryId: categoryId}).fetch().count;         
        }
    });
}
