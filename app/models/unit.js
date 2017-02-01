import DS from 'ember-data';

export default DS.Model.extend({
    
    //relationships
    objectives: DS.hasMany('objective', {inverse: null, async: true}),
    scheme: DS.belongsTo('scheme', {async: true}),

    //attributes    
    name: DS.attr('string')
    
});
