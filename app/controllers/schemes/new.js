import Ember from 'ember';

export default Ember.Controller.extend({

newScheme: Ember.Object.extend(),

actions: {

    createNewScheme(name){
        let newRecord = this.get('store').createRecord('scheme', {
            name: name
        });
        let _this = this;
        newRecord.save().then(function(record){
            console.log(record);
            alert("New Scheme created!");
            _this.transitionToRoute('schemes.scheme', record);
        })
    }

}

});
