import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    name: DS.attr('string'),
    date: DS.attr('string'),
    startTime: DS.attr('string'),
    duration: DS.attr('number'),


    //relationships
    objectives: DS.hasMany('objective'),
    questions: DS.hasMany('question'),
    resources: DS.hasMany('resource')

});
