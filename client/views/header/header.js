Template['header'].helpers({
});

Template['header'].events({
	'click .log-out.button' : function () {
	    Meteor.logout();
  	},
  	'submit #register-form' : function(e, t) {
      e.preventDefault();
      var email = t.find('#account-email').value
        , password = t.find('#account-password').value;

        // Trim and validate the input

      Accounts.createUser({email: email, password : password}, function(err){
          if (err) {
            console.log(err);
          } else {
            alert('success');
          }

        });

      return false;
    }
});
