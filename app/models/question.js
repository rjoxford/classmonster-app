import DS from 'ember-data';

export default DS.Model.extend({

    //attributes
    length: DS.attr('string'),
    difficulty: DS.attr('string'),
    questionText: DS.attr('string'),
    answer: DS.attr('string'),

    hasPicture: DS.attr('boolean', { defaultValue: false }),
    picture: DS.attr('string', { defaultValue: "" }),

    hasMulti: DS.attr('boolean', { defaultValue: false }),
    answer2: DS.attr('string', { defaultValue: "" }),
    answer3: DS.attr('string', { defaultValue: "" }),
    answer4: DS.attr('string', { defaultValue: "" }),

    hasAdvice: DS.attr('boolean', { defaultValue: false }),
    advice: DS.attr('string', { defaultValue: "" }),

    //relationships
    objective: DS.belongsTo('objective', {async : true})

});
