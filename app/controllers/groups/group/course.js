import Ember from 'ember';

export default Ember.Controller.extend({

    store: Ember.inject.service(),


    //Required models
    allSchemes: Ember.computed(function(){
        var store = this.get('store');
        return store.findAll('scheme');
    }),

    actions: {



        setCurrentScheme: function(model){
            model.set('currentScheme', this.get('selectedScheme'));
            model.save();
        },

        setCurrentUnit: function(model){
                model.set('currentUnit', this.get('selectedUnit'));
                model.save();
        },
    }

});
