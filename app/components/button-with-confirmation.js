import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    launchConfirmDialog() {
      this.set('confirmShown', true);
    },

    submitConfirm() {
      // trigger action on parent component
      this.get('submitConfirm')();
      this.set('confirmShown', false);
    },

    cancelConfirm() {
      this.set('confirmShown', false);
    }
  }
});
