import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    shortDescription: DS.attr('string'),

    //relationships
    objective: DS.belongsTo('objective', {async : true}),
  
});
