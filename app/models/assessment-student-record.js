import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    // dateSat: DS.attr('string'),
    totalScore: DS.attr('number', {defaultValue:0}),

    //relationships
    student: DS.belongsTo('student'),
    assessmentGroupRecord: DS.belongsTo('assessment-group-record'),
    assessmentStudentQuestionRecords: DS.hasMany('assessment-student-question-record')

});
