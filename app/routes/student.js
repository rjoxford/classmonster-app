import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        this.store.findRecord('student', 1);
    }
});
