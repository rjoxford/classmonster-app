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
        var droppable = this.get('droppable');
        if(droppable){
            event.preventDefault();
            this.set('dragClass', 'deactivated');
        }
    },

    drop: function(event) {
        var data = event.dataTransfer.getData('text');
        this.sendAction('dropped', data);
        this.set('dragClass', 'deactivated');
    }
     
});
