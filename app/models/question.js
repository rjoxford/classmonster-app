import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    length: DS.attr('string'),
    difficulty: DS.attr('string'),
    // TODO - optimise database queries by storing length, difficulty etc as integer representations. See server.
    questionText: DS.attr('string'),
    answer: DS.attr('string'),

    hasPicture: DS.attr('number'),
    picture: DS.attr('string'),

    hasMulti: DS.attr('boolean'),
    answer2: DS.attr('string'),
    answer3: DS.attr('string'),
    answer4: DS.attr('string'),

    hasAdvice: DS.attr('boolean'),
    advice: DS.attr('string'),

    //relationships
    objective: DS.belongsTo('objective', {async : true})

});
