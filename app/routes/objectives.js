import Ember from 'ember';

export default Ember.Route.extend({

    model: function(){
        return this.store.findAll('objective');
    },


    actions: {
        editObjective: function(){},

        testAction: function(){
            console.log("Sendaction confirmed in Route");
        },

        //updateObjective: function(objective){
        //    objective.save();
        //    this.set('isEditing', false);
        //    console.log('isEditing reset to false in the controller');
        //    return true;
        //}

    }

});
