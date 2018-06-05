import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    forename: DS.attr('string'),
    surname: DS.attr('string'),
    username: DS.attr('string'),
    email: DS.attr('string'),
    points: DS.attr('number'),

    //relationships
    groups: DS.hasMany('group'),
    blogs: DS.hasMany('blog')

});
