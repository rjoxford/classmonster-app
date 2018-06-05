import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),

    // The array of student feedbacks
    studentFeedbacks: null,

    currentStudentFeedback: null,

    // Set the current studentFeedback, for selecting the student's feedbacks
    setCurrent(studentFeedback){
        this.set('currentStudentFeedback', studentFeedback);
    },

    // Create an array of objects to collate the required models for producing feedback - students, objective, score, feedback etc.
    // To be passed to a component to handle selection of different objectives, feedbacks, examples and questions etc
    createStudentFeedbacks(group){
        // Define the object prototype
        const StudentFeedbackClass = Ember.Object.extend({
            student: null,
            target: {
                objective: "Test Objective Here",
                score: 2,
                feedback: "Test Feedback... do some work yo."
            }
        });
        var store = this.get('store');
        // The array of objects to be loaded and ultimately returned
        let studentFeedbacksArray = [];
        // Exit if the model is not set --- TODO - Bug - Needs fixing and removing this hack
        if (!this.get('group.students')){return}
        let students = this.get('group.students');
        console.log(this.get('group.name'));
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
        // this.set('studentFeedbacks', studentFeedbacksArray);
    },

});
