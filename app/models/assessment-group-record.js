import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    notes: DS.attr('string'),


    //relationships
    group: DS.belongsTo('group'),

    assessment: DS.belongsTo('assessment', {inverse:null}),

    assessmentStudentRecords: DS.hasMany('assessment-student-records')

});
