import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ["year-gridunit"],

    monthday: Ember.computed('date', function(){
        return this.get('date').get('date').date();
    }),

    click: function(){
        let date = this.get('date');
        alert(date);
    }

});
