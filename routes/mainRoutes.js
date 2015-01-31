Router.route('/', function () {
	this.render('home');
	SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

Router.route('/about/:username', function () {
	Session.set('viewedUser', this.params.username);
	Meteor.subscribe('userCategories', this.params.username);
	this.render('user');
},{
	name: 'userPage',
	waitOn: function(){
		return Meteor.subscribe('userCategories', this.params.username);
	}
});


Router.route('/about/:username/the/:categoryname', function () {
	Session.set('viewedUser', this.params.username);
	Session.set('categoryName', this.params.categoryname);
	Meteor.subscribe('categoryReviews',userCategories.findOne({categoryname: this.params.categoryname})._id);
	this.render('categoryPage');
}, {
	name: 'categoryPage',
	waitOn: function(){
		return Meteor.subscribe('userCategories', this.params.username);
	}
});

