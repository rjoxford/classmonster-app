import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),

    //Required models
    allSchemes: Ember.computed(function(){
        var store = this.get('store');
        return store.findAll('scheme');
    }),

    actions: {



        setCurrentScheme(scheme){
            var group = this.get('model');
            group.set('currentScheme', this.get('selectedScheme'));
            group.save();
        },

        setCurrentUnit(model){
                model.set('currentUnit', this.get('selectedUnit'));
                model.save();
        },
    }

});
