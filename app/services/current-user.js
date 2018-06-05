import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.Service.extend({
    session: Ember.inject.service('session'),
    store: Ember.inject.service(),
    isLoggedIn: false,

    user: Ember.computed(function(){
        return this.get('store').findRecord('user', 17);
    }),

    login(user){
        this.set('user', user);
        // console.log('Username: ' + user.get('user'));
        console.log("Logging in the user");
        this.set('isLoggedIn', true);
        return true
    },

    groups: Ember.computed(function(){
        // Look up and return the user's groups from the store
        let user = this.get('user');
        let store = this.get('store');
        return store.query('group', {'user':user});
    }),

    // load() {
    //     let userId = this.get('session.data.authenticated.user_id');
    //     if (!isEmpty(userId)) {
    //         return this.get('store').findRecord('user', userId).then((user) => {
    //           this.set('user', user);
    //         });
    //     } else {
    //       return Ember.RSVP.resolve();
    //     }
    // }

});
