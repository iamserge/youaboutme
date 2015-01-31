Template['categoryPage'].helpers({
	'category' : function () {
		return userCategories.findOne({categoryname: Session.get('categoryName')});
	},
	'notSelf' : function () {
		
		if (Meteor.userId())
			if (Meteor.user().username != Session.get('viewedUser'))
				return true;
			else
				return false;
		else 
			return false
	},
	'reviews' : function(){
		return reviews.find().fetch();
	}
});

Template['categoryPage'].events({
	
});
