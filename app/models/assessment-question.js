import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    questionNumber: DS.attr('string'),
    question: DS.attr('string'),
    marks: DS.attr('number'),

    //relationships
    assessment: DS.belongsTo('assessment'),
    objective: DS.belongsTo('objective', {inverse: null})

});
