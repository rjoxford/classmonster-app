import Ember from 'ember';

export default Ember.Controller.extend({

    // Load the studentFeedbacks array from the parent Controller
    feedbackController: Ember.inject.controller('groups.group.feedback-sheets.index'),
    studentFeedbacks: Ember.computed(function(){
        // Set as the studentFeedbacks property of parent controllr
        let fbs = this.get('feedbackController.studentFeedbacks');
        // But if it does not exist, then transition back to parent
        if (!fbs){
            this.transitionToRoute('groups.group.feedback-sheets')
        } else return fbs;
    }),


    actions: {

        print(){
            window.print()
        },
    }

});
