import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    name: DS.attr('string'),

    //relationships
    students: DS.hasMany('student', {async : true}),
    user: DS.belongsTo('user', {async : true}),

    currentScheme: DS.belongsTo('scheme', {inverse: null, async : true}),
    currentUnit: DS.belongsTo('unit', {inverse: null, async : true}),
    currentObjective: DS.belongsTo('objective', {inverse: null, async : true}),
  
});
