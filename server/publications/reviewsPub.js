Meteor.publish('categoryReviews', function (categoryId) {
	check(categoryId, String);
	
  	return reviews.find({categoryId: categoryId});
});