import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    questionNumber: DS.attr('number'),
    marks: DS.attr('number'),

    //relationships
    assessment: DS.belongsTo('assessment'),
    objective: DS.belongsTo('objective', {inverse: null}),
    question: DS.belongsTo('question', {inverse: null}),

});
