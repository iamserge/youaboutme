Template['addCategory'].helpers({
	
});

Template['addCategory'].events({
	'click .addCategory': function(e) {
	    e.preventDefault();

	    var userCateogry = {
	      	categoryname: $(e.target).parent().find('[name=title]').val(),
	      	description: $(e.target).parent().find('[name=description]').val()
	    };
	  	console.log(userCateogry);
	    Meteor.call('userCategoryInsert', userCateogry, function(error, result) {
	      	// display the error to the user and abort
	      	if (error)
	        	return alert(error.reason);

	    });
	}
});
