Template['addReview'].helpers({
	
});

Template['addReview'].events({
	'click .addReview': function(e) {
	    e.preventDefault();

	    var review = {
	      	content: $(e.target).parent().find('[name=content]').val(),
	      	categoryId: userCategories.findOne({categoryname: Session.get('categoryName')})._id
	    };
	    console.log(review);
	    Meteor.call('reviewInsert', review, function(error, result) {
	      	// display the error to the user and abort
	      	if (error)
	        	return alert(error.reason);

	    });
	}
});
