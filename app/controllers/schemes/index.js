import Ember from 'ember';

export default Ember.Controller.extend({

actions: {

    createNewScheme(){
        var schemeName = this.get('newSchemeName');
        var newScheme = this.store.createRecord('scheme', { 'name': schemeName });
        newScheme.save();
        // And close modal

    },

}

});
