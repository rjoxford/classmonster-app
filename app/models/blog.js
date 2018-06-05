import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    title: DS.attr('string'),
    content: DS.attr('string'),


    //relationships
    objectives: DS.hasMany('objective'),
    author: DS.belongsTo('user')

});
