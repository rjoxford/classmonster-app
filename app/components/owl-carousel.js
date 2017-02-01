import Ember from 'ember';

export default Ember.Component.extend({

    classNames: [ 'owl-carousel', 'owl-theme' ],

    didInsertElement(){
        this.$().owlCarousel();
    },

});
