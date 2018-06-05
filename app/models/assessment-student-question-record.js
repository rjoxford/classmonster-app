import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    questionNumber: DS.attr('string'),
    question: DS.attr('string'),
    marks: DS.attr('number'),

    //relationships
    student: DS.belongsTo('student'),
    assessment: DS.belongsTo('assessment', {inverse:null}),
    assessmentQuestion: DS.belongsTo('assessmentQuestion', {inverse:null}),
    objective: DS.belongsTo('objective', {inverse: null})


});
