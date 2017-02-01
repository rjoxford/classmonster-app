import Ember from 'ember';

export default Ember.Controller.extend({

    //Properties


    //Viewing controls
    viewGeneral: false,
    viewCourse: true,
    viewAssessment: false,
    viewStudents: false,
    viewPriorities: false,
    resetL1Views:   function(){
        this.set('viewGeneral', false);
        this.set('viewCourse', false);
        this.set('viewAssessment', false);
        this.set('viewStudents', false);
        this.set('viewPriorities', false);
    },

    //Allows for quickly changing the course the students are enrolled on
    //and the unit studied within that course
    selectingScheme: false,
    selectingUnit: false,



    //Required models
    allSchemes: function(){
        return this.store.findAll('scheme');
    }.property(),



    //Actions
    actions: {

        //TODO refactor this, pass in argument to single function DRYUP
        togViewGeneral: function(){
            this.resetL1Views();
            this.toggleProperty('viewGeneral');
        },
        togViewCourse: function(){
            this.resetL1Views();
            this.toggleProperty('viewCourse');
        },
        togViewAssessment: function(){
            this.resetL1Views();
            this.toggleProperty('viewAssessment');
        },
        togViewStudents: function(){
            this.resetL1Views();
            this.toggleProperty('viewStudents');
        },
        togViewPriorities: function(){
            this.resetL1Views();
            this.toggleProperty('viewPriorities');
        },



    },

});
