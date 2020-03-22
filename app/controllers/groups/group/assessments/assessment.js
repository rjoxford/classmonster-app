import Ember from 'ember';




export default Ember.Controller.extend({




students: Ember.computed( function(){

    let _this = this;

    // create student prototype
    const Student = Ember.Object.extend({
        student: "",
        createStudentAssessmentRecord(groupAssessmentRecord){
        //////// Called to create an assessment record for a student. Will also create a set of
        //////// assessment student question records for each question in the assessment
        // Create the assessment student record
        let store = _this.get('store');
        let newStudentAssessmentRecord = store.createRecord('assessment-student-record', {
            'student' : this.get('student'),
            'assessmentGroupRecord' : groupAssessmentRecord,
            'score' : 0
        });

        newStudentAssessmentRecord.save().then(function(studentAssessmentRecord){
            // Load the assessment
            // let assessmentGroupRecordID = groupAssessmentRecord.get('id');
            // let assessmentID = _this.get('assessment.id');

            // For each assessmentQuestion in the assessment, create a studentQuestionRecord
            let assessmentQuestions = groupAssessmentRecord.get('assessment.assessmentQuestions');
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
        // Check the groupAssessmentRecord to see if a studentAssessmentRecord exists
        findAssessmentRecord(groupAssessmentRecord){
            // _this.get('store').fi
        }
    })

    // Load the students in the group
    let groupStudents = this.get('model.group.students');
    // Create a new student object for each student in the class
    groupStudents.forEach((student)=>{
        let newStudentObj = Student.create({
            student: student,
            
        })
    })
}),

// For each student in the group, check if they have a studentAssessmentRecord for the given group


});
