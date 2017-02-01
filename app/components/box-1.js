import Ember from 'ember';

export default Ember.Component.extend({

    classNameBindings : ['cssClass'],

    cssClass: Ember.computed('size', function(){
        //boxes now have different sizes
        //1 fits 1 across the width, 2 fits 2 across the width etc
        if(this.get('size')===""){
            return "box-100";} else {
            return "box-" + this.get('size');
        }
        }),

    //actions
    action: function(){
        this.sendAction('action');
    },

});
