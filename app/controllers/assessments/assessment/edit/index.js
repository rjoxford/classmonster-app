import Ember from 'ember';

export default Ember.Controller.extend({

    // Array to sort the model's assessment Questions
    // model.[] required because ember cannot detect changes to assoicated data/items with model alone
    // Also, see here: https://stackoverflow.com/questions/46211089/emberjs-refreshing-a-data-model-does-not-update-associated-computed-properties/46211471#46211471
    assessmentQuestions: Ember.computed('model.assessmentQuestions', 'model.@each.assessmentQuestions', 'model.[]', 'model', function(){
        return this.get('model').get('assessmentQuestions').sortBy('questionNumber');
    }),

    viewDelete: false,

    itemToDelete: null,

    actions: {

        addObjective(data, assessmentQuestion){
            // Gain the objective model id
            var objectiveId = JSON.parse(data).objectiveId;
            // Find the objective from the store
            var objectiveRecord = this.get('store').peekRecord('objective', objectiveId);
            // Set the assessmentQuestion objective as the store objective
            assessmentQuestion.set('objective', objectiveRecord);
            assessmentQuestion.save();
        },

        addQuestion(){
            let assessment = this.get('model');
            let assessmentQuestions = this.get('model').get('assessmentQuestions');
            let count = assessmentQuestions.get('length') + 1;
            // Create a new assessment question
            let newQuestion = this.get('store').createRecord('assessment-question', {
                assessment: assessment,
                question: 1,
                questionNumber: count,
                marks : 3,
            });
            newQuestion.save();
            assessmentQuestions.pushObject(newQuestion);
        },

        confirmDeleteAssessmentQuestion(){
            let _this = this;
            let itemToDelete = this.get('itemToDelete');
            itemToDelete.destroyRecord().then(function(){
                _this.set('itemToDelete', null);
                _this.toggleProperty('viewDelete');
                // TODO - the sorted assessmentQuestions array is not refreshing after model update. - temp fix below
                _this.get('assessmentQuestions').removeObject(itemToDelete);
            });
        },
        deleteAssessmentQuestion(assessmentQuestion){
            this.set('itemToDelete', assessmentQuestion);
            this.toggleProperty('viewDelete')
        },

        save(){
            let _this = this;
            let assessment = this.get('model');
            assessment.save().then(function(){
                alert(assessment.get('title') + "\nAssessment saved");
                _this.transitionToRoute('assessments.assessment');
            });
        },

        togViewDelete(){
            this.toggleProperty('viewDelete');
        }

    }

});
