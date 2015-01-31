Meteor.publish('userCategories', function (username) {
	check(username, String);
	
  	return userCategories.find({username: username});
});

