import Ember from 'ember';

export default Ember.Controller.extend({

isDeletingSchemes: false,

actions: {

    createNewScheme(){
        var schemeName = this.get('newSchemeName');
        var newScheme = this.store.createRecord('scheme', { 'name': schemeName });
        newScheme.save();
        // And close modal
    },

    deleteScheme(scheme){
        scheme.destroyRecord();
    },

    togIsDeletingSchemes(){
        this.toggleProperty('isDeletingSchemes');
    }
}

});
