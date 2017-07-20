import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        holla(){
            console.log(this.get('username'));
            alert("holla");
        },

        submit(){
            // var question = this.get('model');
            //Collect form attributes
            //var user = Ember.Object.extend({});

            var email = this.get('email');
            var password = this.get('password');
            var forename = this.get('forename');
            var surname = this.get('surname');
            var username = this.get('username');

            // Create new user
            var newUser = this.get('store').createRecord('user', {
                email: email,
                password: password,
                forename: forename,
                surname: surname,
                username: username
            });
            // newUser.save();
            var _this = this;
            newUser.save().then(function(){
                _this.transitionToRoute('users');
            })
        },

    }

});
