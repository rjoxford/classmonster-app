import Ember from 'ember';

export default Ember.Component.extend({

    areaLetter: Ember.computed('area', function(){
        return this.get('area').charAt(0);
    })


});
