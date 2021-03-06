//Fields
AccountsTemplates.addField({
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 3,
    errStr: 'error.minChar'
});

AccountsTemplates.removeField('email');
AccountsTemplates.addField({
    _id: 'email',
    type: 'email',
    required: true,
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'error.accounts.Invalid email',
    trim: true,
    lowercase: true
});

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 8,
    errStr: 'error.minChar'
});


/* Configuration */
AccountsTemplates.configure({

    confirmPassword: false
  
    /*
     sendVerificationEmail: true,
     continuousValidation: false,
     showLabels: true,
     forbidClientAccountCreation: false,
     formValidationFeedback: true,
     homeRoutePath: "/",
     showAddRemoveServices: false,
     showPlaceholders: true,
     */
});


/* Router */
AccountsTemplates.configureRoute('signIn', {
    redirect: function(){
        var user = Meteor.user();
        if (user)
          Router.go('/about/' + user.username);
    }
});

AccountsTemplates.configureRoute('signUp', {
    redirect: function(){
        var user = Meteor.user();
        if (user)
          Router.go('/about/' + user.username);
    }
});