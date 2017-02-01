import DS from 'ember-data';

export default DS.Model.extend({

    //relationships
    schemes: DS.hasMany('scheme'),


    //attributes
    name: DS.attr('string'),

});
