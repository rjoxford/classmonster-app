import Ember from 'ember';

export default Ember.Component.extend({

    classNames:         [],
    classNameBindings:  [ 'cssClass' ],

    cssClass: Ember.computed('size', 'isExpanded', function(){
        //box sizes now based upon bootstraps col-md-...
        if(this.get('isExpanded')){
            return "col-md-12";
        } else {
            if(!this.get('size')){
                return "col-md-12";} else {
                return this.get('size');
            }
        }
    }),

    isExpanded        : false,

    actions: {
        expand: function(){
            this.toggleProperty('isExpanded');
        }
    }



});
