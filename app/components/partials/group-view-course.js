import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),

    //Required models
    allSchemes: Ember.computed(function(){
        var store = this.get('store');
        return store.findAll('scheme');
    }),
    selectedScheme: Ember.computed('model', function(){
        return this.get('model.currentScheme');
    }),

    units: Ember.computed( 'selectedScheme', function(){
        return this.get('selectedScheme.units');
    }),

    selectedUnit: Ember.computed(function(){
        return this.get('model.currentUnit');
    }),

    actions: {



        setCurrentScheme(scheme){
            this.set('selectedScheme', scheme);
            var group = this.get('model');
            group.set('currentScheme', scheme);
            group.save();
        },

        setCurrentUnit(unit){
            this.set('selectedUnit', unit);
            let group = this.get('model');
            group.set('currentUnit', unit);
            group.save();
        },
    }

});
