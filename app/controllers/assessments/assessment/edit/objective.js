import Ember from 'ember';

export default Ember.Controller.extend({

// selectedObjective set within objective finder component
// selectedObjective: null,

actions: {

    selectObjective(objective){
        let assessmentQuestion = this.get('model');
        assessmentQuestion.set('objective', objective);
        assessmentQuestion.save();
        this.transitionToRoute('assessments.assessment.edit')
    },

    confirmObjective(){},

    cancelObjective(){
        this.set('selectedObjective', null);
    },

}

});
