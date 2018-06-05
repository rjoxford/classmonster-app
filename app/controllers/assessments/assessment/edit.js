import Ember from 'ember';

export default Ember.Controller.extend({


    actions: {

        addQuestion(){
            let assessment = this.get('model');
            let assessmentQuestions = this.get('model').get('assessmentQuestions');
            let count = assessmentQuestions.get('length') + 1;
            // Create a new assessment question
            let newQuestion = this.get('store').createRecord('assessment-question', {
                assessment: assessment,
                question: "Testing, check, testing",
                questionNumber: count,
                marks : 3,
            });
            newQuestion.save();
            assessmentQuestions.pushObject(newQuestion);
        },

        addObjective(data, assessmentQuestion){
            // Gain the objective model id
            var objectiveId = JSON.parse(data).objectiveId;
            // Find the objective from the store
            var objectiveRecord = this.get('store').peekRecord('objective', objectiveId);
            // Set the assessmentQuestion objective as the store objective
            assessmentQuestion.set('objective', objectiveRecord);
            assessmentQuestion.save();
        },

        save(){
            let _this = this;
            let assessment = this.get('model');
            assessment.save().then(function(){
                alert(assessment.get('title') + "\nAssessment saved");
                _this.transitionToRoute('assessments.assessment');
            });
        },

    }

});
