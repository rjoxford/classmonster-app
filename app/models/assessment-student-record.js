import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    dateSat: DS.attr('string'),
    score: DS.attr('number'),


    //relationships
    student: DS.belongsTo('student'),

    questionRecord: DS.hasMany('assessment-student-question-record')

});
