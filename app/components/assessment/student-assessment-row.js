import Ember from 'ember';

export default Ember.Component.extend({

tagName: "tr",

studentQuestionRecords: [],

// studentQuestionRecords: Ember.computed(function(){
//     // Attempt to find the student record if it exists
//     let store = this.get('store');
//     let assessmentStudentRecord = store.queryRecord('assessment-student-record', {
//         'student': this.get('student'),
//         'assessmentGroupRecord' : this.get('assessmentGroupRecord')
//     });
//     return assessmentStudentRecord.then(function(assessmentStudentRecord){
//         return assessmentStudentRecord.get('assessmentStudentQuestionRecords');
//     });
// }),

actions: {

    test1(){
        // this.send('createStudentQuestionRecords');
        console.log(this.get('studentQuestionRecords'));
    },
    test2(){
        // this.send('createStudentQuestionRecords');
        console.log(this.get('studentQuestionRecords'));
    },

    createStudentAssessmentRecord(){
        //////// Called to create an assessment record for a student. Will also create a set of
        //////// assessment student question records for each question in the assessment
        // Create the assessment student record
        let _this = this;
        let store = this.get('store');
        let newStudentAssessmentRecord = store.createRecord('assessment-student-record', {
            'student' : this.get('student'),
            'assessmentGroupRecord' : this.get('assessmentGroupRecord'),
            'score' : 0
        });

        newStudentAssessmentRecord.save().then(function(studentAssessmentRecord){
            // Load the assessment
            let assessmentGroupRecordID = _this.get('assessmentGroupRecord.id');
            let assessmentID = _this.get('assessment.id');

            // For each assessmentQuestion in the assessment, create a studentQuestionRecord
            let assessmentQuestions = _this.get('assessmentGroupRecord.assessment.assessmentQuestions');
            assessmentQuestions.forEach(function(question){
                console.log(question.get('id'));
                // Create the studentQuestionRecord
                let newAssessmentStudentQuestionRecord = store.createRecord('assessment-student-question-record', {
                    student : _this.get('student'),
                    assessmentQuestion: question,
                    assessmentStudentRecord: studentAssessmentRecord,
                    assessment: _this.get('assessment')
                });
                newAssessmentStudentQuestionRecord.save().then(function(newQuestionRecord){
                    // Push the new record to an array
                    let studentQuestionRecords = _this.get('studentQuestionRecords');
                    studentQuestionRecords.pushObject(newQuestionRecord);
                })
            });
        })
    },
}

});

// questions: Ember.computed(function(){
//     // Find the studentQuestionRecords in the associated students
//     let assessmentGroupRecord = this.get('assessmentGroupRecord');
//     return this.get('assessmentGroupRecord.assessment.assessmentQuestions');
// }),

// exists: Ember.computed('studentQuestionRecords', function(){
//     if (this.get('studentQuestionRecords')) {
//         return true;
//     } else {
//         return false;
//     }
// }),


// studentQuestionRecords: Ember.computed(function(){
//     // Attempt to find the student record if it exists
//     let store = this.get('store');
//     let assessmentStudentRecord = store.queryRecord('assessment-student-record', {
//         'student': this.get('student'),
//         'assessmentGroupRecord' : this.get('assessmentGroupRecord')
//     });
//     return assessmentStudentRecord.then(function(assessmentStudentRecord){
//         return assessmentStudentRecord;
//     });
// }),
