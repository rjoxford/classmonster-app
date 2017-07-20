import Ember from 'ember';

export default Ember.Component.extend({

classNames: [ "button-with-modal" ],

// onConfirm: this.get('onConfirm'),

collapsible: true,

  actions: {
    launchModal() {
      this.set('viewModal', true);
    },

    submit() {
      // trigger action on parent component
      this.get('submit')();
    },

    cancel() {
      this.set('viewModal', false);
    }
  }
});
