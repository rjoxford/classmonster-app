import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    score: DS.attr('number', {defaultValue:0}),

    //relationships
    assessmentStudentRecord: DS.belongsTo('assessment-student-record'),
    assessment: DS.belongsTo('assessment', {inverse:null}),
    assessmentQuestion: DS.belongsTo('assessment-question', {inverse:null})


});
