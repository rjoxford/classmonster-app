import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    currentUser: Ember.inject.service(),

    users: Ember.computed(function(){
        return this.store.findAll('user');
    }),

    actions: {

        login(user){
            if (this.get('currentUser').login(user)) {
                console.log('Successfully set user!');
                // Transition to home
                this.transitionToRoute('index');
            }
        },

        authenticate() {
            let { identification, password } = this.getProperties('identification', 'password');
            this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
                this.set('errorMessage', reason.error || reason);
            });
        },
    }
});
