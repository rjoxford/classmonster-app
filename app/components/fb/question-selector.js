import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),

    questions: Ember.computed(function(){
        return this.get('store').findAll('question');
    }),

    actions: {

        // Clear this component...
        togIsSelectingQuestion(){
            this.get('togIsSelectingQuestion')();
        },

        setTargetQuestion(question){
            let studentFeedback = this.get('studentFeedback');
            studentFeedback.setTargetQuestion(question);
            // Clear the modal
            this.send('togIsSelectingQuestion');
        },

    }

});
