import Ember from 'ember';

export default Ember.Route.extend({

    needs: ['application'],

    model: function() {
        //find by the class ID stored as a property of the application controller
        var groupID = this.controllerFor('application').get('activeClass.id');
        return this.store.query('student', { group: groupID });
    }



});



//unit model 
//import DS from 'ember-data';

//export default DS.Model.extend({
    
//    //relationships
//    objectives: DS.hasMany('objective', {inverse: null, async: true}),

//    //attributes    
//    name: DS.attr('string')
    
//});
