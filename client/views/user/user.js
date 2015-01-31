Template['user'].helpers({
	'noCategories' : function  () {
		return userCategories.find().fetch().length == 0
	},
	'userCategories' : function () {
		return userCategories.find().fetch();
	},
	'viewedUser' : function () {
		return Session.get('viewedUser');
	},
	'isViewedUser' : function () {
		if (Meteor.userId())
			return Session.get('viewedUser') == Meteor.user().username;
		else 
			return false;
	}
});

Template['user'].events({
});
