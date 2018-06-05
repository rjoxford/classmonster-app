import Ember from 'ember';

export default Ember.Component.extend({

tagName: "tr",
classNameBindings : [ 'dragClass' ],
attributeBindings: [ 'droppable' ],
droppable: true,

drop(event){
    console.log("Dropped");
    let data = event.dataTransfer.getData("text");
    let assessmentQuestion = this.get('assessmentQuestion');
    this.sendAction('onDrop', data, assessmentQuestion);
    // Send the action to the route's controller for handling
    // console.log(data);
    // var unit = this.get('unit');
    // this.sendAction('dropped', data, unit);
    // this.set('dragClass', 'deactivated');
},

dragOver(event){
    event.preventDefault();
    // this.set('dragClass', 'activated');
},

dragLeave(event){
    // this.set('dragClass', 'deactivated');
},

});
