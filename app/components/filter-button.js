import Ember from 'ember';

export default Ember.Component.extend({

    classNames        : [],
    classNameBindings : [ 'activeClass' ],
    
    active         : false,
    activeClass    : function(){
        var active = this.get('active');
        if (active){
            return 'filter-button-active';}
        else { 
            return 'filter-button';}
    }.property('active'),

    actions: {
        toggle: function() {
            console.log("toggling!");
            this.toggleProperty('active');
            var filterType = this.get('type');
            var filter = this.get('value');
            console.log("value is " + filter);
            console.log("type is " + filterType);
            this.sendAction('action', filterType, filter);
        }
    }




});
