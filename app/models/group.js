import DS from 'ember-data';

export default DS.Model.extend({

    //
    //attributes
    //
    name: DS.attr('string'),

    // Set a random color!
    color: DS.attr('string', {defaultValue: function(){
        // Return a random color by default
        let colors = [ 'red', 'yellow', 'green', 'blue']
        return colors[Math.floor(Math.random() * colors.length)];
    }}),

    //
    //relationships
    //
    students: DS.hasMany('student', {async : true}),
    user: DS.belongsTo('user', {async : true}),

    assessmentRecords: DS.hasMany('assessment-group-records'),


    currentScheme: DS.belongsTo('scheme', {inverse: null, async : true}),
    currentUnit: DS.belongsTo('unit', {inverse: null, async : true}),
    currentObjective: DS.belongsTo('objective', {inverse: null, async : true}),

});
