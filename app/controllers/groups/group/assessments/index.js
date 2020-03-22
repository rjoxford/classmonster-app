import Ember from 'ember';

export default Ember.Controller.extend({

actions: {

    deleteAssessmentRecord(assessmentRecord){
        assessmentRecord.destroyRecord();
    }
    
}


});
