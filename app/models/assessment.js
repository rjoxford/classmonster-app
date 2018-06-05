import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    title: DS.attr('string'),
    description: DS.attr('string'),


    //relationships
    assessmentQuestions: DS.hasMany('assessment-question')

});
