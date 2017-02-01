import Ember from 'ember';

export default Ember.Controller.extend({

    testrecord: function(){
        return this.store.queryRecord('student', { name: 'Draco' });
    }.property(),

});
