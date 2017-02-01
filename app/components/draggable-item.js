import Ember from 'ember';

export default Ember.Component.extend({
    classNames        : [ 'draggableItem' ],
    classNameBindings : [ 'class' ],
    attributeBindings : [ 'draggable' ],
    draggable         : 'true',

    dragStart: function(event) {
        console.log(event.target.id);
        return event.dataTransfer.setData('text', event.target.id);
    }
});
