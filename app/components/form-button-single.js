import Ember from 'ember';

export default Ember.Component.extend({

    // tagName                : 'div',
    // type                   : 'button',
    classNames             : [ 'mybtn' ],
    classNameBindings      : ['selectedClass', 'color'],
    // attributeBindings   : ['type'],
    // type                : "cancel",

    selected            : false,
    selectedClass       : Ember.computed('selected', function(){
        var selected = this.get('selected');
        if(selected){
            return "selected";
        } else {
            return "";
        }
    }),

    click(){
        this.toggleProperty('selected');
    },

    actions: {

    },

});
