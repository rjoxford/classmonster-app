import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    notes: DS.attr('string'),
    date: DS.attr('date', {defaultTo: function(){}}),


    //relationships
    group: DS.belongsTo('group'),

    assessment: DS.belongsTo('assessment', {inverse:null}),

    assessmentStudentRecords: DS.hasMany('assessment-student-records')


    //////////////////////////////////// WHEN to create a student score record for each student?

});
