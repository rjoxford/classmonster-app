import Ember from 'ember';
// import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend({

    // currentUser: Ember.inject.service(),

    currentUser: Ember.computed(function() {
      return Ember.getOwner(this).lookup('service:current-user');
    }),

    user: Ember.computed(function(){
        return this.get('currentUser').get('user');
    }),

    // TODO - the user will be set by a logged in user service
    model(){
        return this.get('store').findAll('group');
    }

});
