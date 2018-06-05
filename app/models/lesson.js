import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    name: DS.attr('string'),


    //relationships
    objectives: DS.hasMany('objective'),
    questions: DS.hasMany('question'),
    resources: DS.hasMany('resource')

});
