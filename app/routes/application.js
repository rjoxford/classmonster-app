import Ember from 'ember';
//import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

// export default Ember.Route.extend(ApplicationRouteMixin, {
export default Ember.Route.extend({

    actions: {


    login () {
      var lockOptions = {authParams:{scope: 'openid'}};
      this.get('session').authenticate('simple-auth-authenticator:lock', lockOptions);
    },

    error () {
        this.transitionTo('catchall', 'application-error');
    },

    logout () {
      this.get('session').invalidate();
    }
  }
});
