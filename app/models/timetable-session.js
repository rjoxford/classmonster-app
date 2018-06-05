import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    // groupName: DS.attr('string'),
    day: DS.attr('string'),
    time: DS.attr('string'),
    duration: DS.attr('string'),

    //relationships

    // user: DS.belongsTo('user'),
    group: DS.belongsTo('group', { inverse: null })

});
