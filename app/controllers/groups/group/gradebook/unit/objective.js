import Ember from 'ember';

export default Ember.Controller.extend({

    groupController: Ember.inject.controller('groups.group'),
    group: Ember.computed(function(){
        return this.get('groupController').get('model');
    })


});
