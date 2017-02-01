import Ember from 'ember';

export default Ember.Controller.extend({

    groupController: Ember.inject.controller('groups.group'),

    feedback: Ember.computed.reads('groupController.feedback')

});
