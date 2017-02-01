import Ember from 'ember';

export default Ember.Route.extend({

    model: function(){
        return this.store.findAll('group');
    },

    actions: {

        delete: function(group){
            var self = this;
            group.destroyRecord().then(function(){
                self.transitionTo('groups');
            });
        }





    }

});
