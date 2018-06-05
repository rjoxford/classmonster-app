import Ember from 'ember';

export default Ember.Controller.extend({

    store: Ember.inject.service(),

    // Load the currentStudentFeedback from the parent feedback controller
    feedbackController: Ember.inject.controller('groups.group.feedback-sheets.index'),
    testProp: Ember.computed(function(){
        return this.get('feedbackController').get('testProp');
    }),


    studentFeedback: Ember.computed(function(){
        return this.get('feedbackController').get('currentStudentFeedback');
    }),

    questions: Ember.computed(function(){
        return this.get('store').findAll('question');
    }),

    actions: {

        setQuestion(question){
            let studentFeedback = this.get('model');
            studentFeedback.get('setTargetQuestion')(question);
            this.transitionToRoute('groups.group.feedback-sheets');
            // studentFeedback.set('question', question);
            // this.transitionToRoute('groups.group.feedback-sheets');
        },

    }
});
