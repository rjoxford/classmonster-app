import Ember from 'ember';

export default Ember.Controller.extend({

questions: Ember.computed(function(){
    // Get the assessment question's objective
    let objective = this.get('model.objective');
    return this.store.findAll('question');
}),

actions: {

    selectQuestion(question){
        // Get the assessment question (model)
        let assessmentQuestion = this.get('model');
        assessmentQuestion.set('question', question);
        let _this = this;
        assessmentQuestion.save().then(function(){
            _this.transitionToRoute('assessments.assessment.edit');
        })
    },

}

});
