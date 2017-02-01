import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    name: DS.attr('string'),
    branch: DS.attr('string'),
    area: DS.attr('string'),
    topic: DS.attr('string'),
    level: DS.attr('number'),

    //relationships
    snapscores: DS.hasMany('snapscore', {async : true}),
    questions: DS.hasMany('question', {async : true})

});
