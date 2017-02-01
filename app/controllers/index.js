import Ember from 'ember';

export default Ember.Controller.extend({

    //Properties
    groups: function(){
            return this.store.findAll('group');
        }.property(),
        

});
