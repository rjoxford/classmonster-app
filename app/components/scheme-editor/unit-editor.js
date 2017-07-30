import Ember from 'ember';

export default Ember.Component.extend({
// Requirements
// Objecties can be dragged from an array of filtered objectives and dropped into the unit.
// They will also need to be dragged between different units.
attributeBindings: [ 'droppable' ],
droppable: true,
classNames: [ "scheme-unit" ],
classNameBindings : [ 'dragClass', 'class', 'droppableSetter', 'classId' ],


drop(event){
    console.log('Dropped!');
    var data = event.dataTransfer.getData('text');
    // Send the action to the route's controller for handling
    // console.log(data);
    var unit = this.get('unit');
    this.sendAction('dropped', data, unit);
    this.set('dragClass', 'deactivated');
},

dragLeave(event){
    event.preventDefault();
    this.set('dragClass', 'deactivated');
},

dragOver(event){
    // Prevent drop if gridunit is on R/H edge, or bottom - droppable property is set by route's controller
    var droppable = this.get('droppable');
    if(droppable){
        event.preventDefault();
        this.set('dragClass', 'deactivated');
    }
},

// Actions
actions: {

}

});
