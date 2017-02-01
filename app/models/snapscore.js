import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    score: DS.attr('number'),

    //relationships
    objective: DS.belongsTo('objective', {async: true}),
    student: DS.belongsTo('student', {async: true})

});
