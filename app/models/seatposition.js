import DS from 'ember-data';

export default DS.Model.extend({
  
    //relationships
    student: DS.belongsTo('student', {async: true}),
    
    //attributes    
    plan: DS.attr('number'),
    gridpos: DS.attr('number'),
    
});
