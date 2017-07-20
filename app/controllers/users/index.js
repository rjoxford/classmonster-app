import Ember from 'ember';

export default Ember.Controller.extend({

    applicationController: Ember.inject.controller('application'),

    actions: {

        setCurrentUser(user){
            //Set the application controller currentUser
            this.get('applicationController').set('currentUser', user);
            this.transitionToRoute('index');
        },

    }

});
