import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    title: DS.attr('string'),
    description: DS.attr('string'),
    type: DS.attr('string'),
    url: DS.attr('string'),
    // TODO - optimise database queries by storing length, difficulty etc as integer representations. See server.
    rating: DS.attr('number'),

    //relationships
    objective: DS.belongsTo('objective'),
    // resourceFiles: DS.belongsTo('objective'),
    // author: DS.belongsTo('user'),

});
