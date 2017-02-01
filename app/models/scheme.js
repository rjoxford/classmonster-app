import DS from 'ember-data';

export default DS.Model.extend({
    
    //attributes
    name: DS.attr('string'),

    //relationships
    units: DS.hasMany('unit', {async: true}),
   

});
