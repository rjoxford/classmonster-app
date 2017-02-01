import Ember from 'ember';

export default Ember.Controller.extend({


    modalObjectives: false,
    modalFeedbacks: false,


    studentArray: Ember.computed(function(){
        var group = this.get('model.students');
        return group;

    }),



    feedbackAt: 0,
    feedbackCount: 0,

    //all the feedback items associated with the selected objective
    objectiveFeedbacks: Ember.computed('model.currentObjective', function(){
        var feedbacks = this.get('model.currentObjective.feedbacks');
        return feedbacks;
    }),

    selectedFeedback: Ember.computed('objectiveFeedbacks', 'feedbackAt', function(){
        var feedbacks = this.get('objectiveFeedbacks');
        //var length = feedbacks.length;
        //this.set('feedbackCount', length);
        var feedbackAt = this.get('feedbackAt');
        return feedbacks.objectAt(feedbackAt);
    }),

    questions: Ember.computed(function(){
            return this.store.findAll('question');
    }),

    actions: {

        //Shows the modal for selecting different feedbacks
        togModalFeedbacks: function(){
            this.toggleProperty('modalFeedbacks');
        },
        //Shows the modal for selecting different objectives
        togModalObjectives: function(){
            this.toggleProperty('modalObjectives');
        },
        togViewUnits(){
            this.toggleProperty('viewUnits');
        },

        nextFeedback(){
            this.incrementProperty('feedbackAt');
        },
        previousFeedback(){
            this.decrementProperty('feedbackAt');
        },

        setCurrentObjective(){
            var group = this.get('model');
            var selectedObjective = this.get('selectedObjective');
            group.set('currentObjective', selectedObjective);
            group.save();
        },

        addFeedback: function(newFeedback){
            var newF = this.store.createRecord('feedback', {
                shortDescription: newFeedback,
                objective: this.get('selectedObjective')
            });
            newF.save();
            this.set('newFeedback', "");
        },

    },


});
