import Ember from 'ember';

export default Ember.Component.extend({

    classNames: [ "scheme-objective" ],

    attributeBindings: [ 'draggable' ],
    draggable:  true,

    //Events
    dragStart: function(event) {
        console.log("Dragging started");
        var objective = this.get('objective');
        var objectiveId = this.get('objective.id');
        var originType= this.get('originType');
        var origin = this.get('origin');
        var originId = origin.get('id');
        var myObject = {targetId:event.target.id,
                        objective: objective,
                        objectiveId: objectiveId,
                        originType: originType,
                        origin: origin,
                        originId: originId
        };
        var data = JSON.stringify(myObject);

        //Pass all necessary arguments to the dataTransfer object
        return event.dataTransfer.setData('text', data);
        //return event.dataTransfer.setData('text', event.target.id);
    },

});
