import Ember from 'ember';

export default Ember.Controller.extend({

    isAdding:       false,
    isDeleting:     false,

    objectives: Ember.computed(function(){
        return this.store.findAll('objective');
    }),

    actions: {
        togIsAdding(){
        //Hides or unhides the addingUnit form
                this.toggleProperty('isAdding');
        },

        addUnit(model) {
            //Saves the model to the DB
            var self = this;
            var name = this.get('newUnitName');
            var newUnit = this.store.createRecord('unit', {
                name: name,
                scheme: model
            });
            newUnit.save().then(function(){
                self.set('newUnitName', "");
                self.transitionTo('schemes.units.show', 'newUnit.id')
            });
        },

        cancelAddUnit(){
            //Cancel the add new unit
            this.set('newUnitName', "");
            this.set('isAdding', false);
        },

        togIsDeleting(){
            //Hides or unhides the deleting unit controls
            this.toggleProperty('isDeleting');
        },

        deleteUnit(unit) {
            var self = this;
            unit.destroyRecord();
        },

}



});
