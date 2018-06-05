import Ember from 'ember';

export default Ember.Component.extend({

    // Colors for choosing class colour in palette
    colors: [ "red", "blue", "green", "yellow" ],
    classNames: [ "col-8", "justify-content-center", "row" ],

    actions: {

        // Set Color
        setColor(color){
                this.sendAction('setColor', color);
        },

    }

});
