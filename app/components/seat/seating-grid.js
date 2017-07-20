import Ember from 'ember';

export default Ember.Component.extend({

    classNames        : [ "gridunit" ],
    classNameBindings : [ 'dragClass', 'class', 'droppableSetter', 'classId' ],
    dragClass         : 'deactivated',

    classId           : Ember.computed(function(){
        return 'g' + this.get('idNumber');
    }),

    droppableSetter: Ember.computed('droppable', function(){
        var droppable = this.get('droppable');
        if(droppable){
            return 'draggableDropzone';
        } else {
            return;
        }
    }),

    dragLeave: function(event) {
        event.preventDefault();
        this.set('dragClass', 'deactivated');
    },

    dragOver: function(event) {
        // Prevent drop if gridunit is on R/H edge, or bottom - droppable property is set by route's controller
        var droppable = this.get('droppable');
        if(droppable){
            event.preventDefault();
            this.set('dragClass', 'deactivated');
        }
    },

    drop: function(event) {
        var data = event.dataTransfer.getData('text');
        // Send the action to the route's controller for handling
        this.sendAction('dropped', data);
        this.set('dragClass', 'deactivated');
    }

});
