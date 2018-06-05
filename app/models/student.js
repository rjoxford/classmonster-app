import DS from 'ember-data';

export default DS.Model.extend({

    //relationships
    snapscores: DS.hasMany('snapscore'),
    group: DS.belongsTo('group'),
    seatposition: DS.hasMany('seatposition'),

    //attributes
    name: DS.attr('string'),
    onField: DS.attr('boolean'),
    number: DS.attr('number')



});
