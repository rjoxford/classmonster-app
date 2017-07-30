import Ember from 'ember';

export default Ember.Controller.extend({

isDeleting: false,

actions: {
    delete(model){
        model.destroyRecord();
    },
    togIsDeleting(){
        this.toggleProperty('isDeleting');
    }
        
}

});
