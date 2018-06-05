import Ember from 'ember';

export default Ember.Controller.extend({

    testProp: "Hugo Boss",

    // Set the selectedUnit from which to list all objectives
    selectedUnit: Ember.computed('model', function(){
        return this.get('model.currentUnit');
    }),
    //ObjectivesCollection to be handled as an array of objectives for future functionality of a non-unit collection of objectives - eg assessment objectives
    objectiveCollection: Ember.computed('selectedUnit', function(){
        return this.get('selectedUnit.objectives');
    }),

    // Pull the feedback service
    // feedback: Ember.inject.service('group-feedback'),
    // studentFeedbacks: Ember.computed(function(){
    //     let feedback = this.get('feedback');
    //     return feedback.createStudentFeedbacks(this.get('model'));
    //     // return feedback.studentFeedbacks;
    // },
    currentStudentFeedback: null,

    studentFeedbacks: Ember.computed('selectedUnit', function(){
        // Define the object prototype
        const StudentFeedbackClass = Ember.Object.extend({
            student: null,
            objectiveCollection: this.get('objectiveCollection'),
            target: null,
            question: null,
            setTargetObjective(objective){
                this.set('objective', objective);
            },
            setTargetQuestion(question){
                this.set('question', question);
            },
        });

        var store = this.get('store');
        // The array of objects to be loaded and ultimately returned
        let studentFeedbacksArray = [];
        // Exit if the model is not set --- TODO - Bug - Needs fixing and removing this hack
        if (!this.get('model.students')){return}
        let students = this.get('model.students');
        students.forEach((student)=>{
            // Create a studentFeedback object for the student
                // and set a default target objective, examples and questions
            // Set a default objective
                // ie find the lowest levelled objective that is not a 3
                // Find each score for the objectives in the unit



            // Create the studentFeedback object for the student
            let studentFeedbackObj = StudentFeedbackClass.create({
                student: student
            })
            // Return the array of studentFeedback objects
            studentFeedbacksArray.pushObject(studentFeedbackObj);
        })
        return studentFeedbacksArray;
        // Set the studentFeedbacks property
        // this.set('studentFeedbacks', studentFeedbacksArray);
    }),


    actions: {

        togViewUnits(){
            this.toggleProperty('viewUnits');
        },

        setSelectedUnit(unit){
            this.set('selectedUnit', unit);
            this.set('viewUnits', false);
        },

        setCurrentFeedback(studentFeedback){
            this.set('currentStudentFeedback', studentFeedback);
        },

        selectQuestion(studentFeedback){
            console.log('Student feedback from the index is: ')
            console.log(studentFeedback);
            this.set('currentStudentFeedback', studentFeedback);
            console.log(this.get('currentStudentFeedback'));
            this.transitionToRoute('groups.group.feedback-sheets.select-questions');
        },


    },

});
