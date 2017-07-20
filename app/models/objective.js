import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    name: DS.attr('string'),
    branch: DS.attr('string'),
    area: DS.attr('string'),
    topic: DS.attr('string'),
    level: DS.attr('number'),

    //relationships
    snapscores: DS.hasMany('snapscore'),
    questions: DS.hasMany('question'),
    resources: DS.hasMany('resource'),

});
