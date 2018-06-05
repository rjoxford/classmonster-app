import Ember from 'ember';

export default Ember.Component.extend({

    classNames: "timetable-session",
    classNameBindings: [ 'colorClass' ],
    attributeBindings : [ 'draggable' ],
    draggable         : 'true',

    // Sets the color of the timetable session to the group's color
    colorClass: Ember.computed('color', function(){
        let color = this.get('color');
        return "color-palette-" + color;
    }),

    // Calls the position action on the parent controller.
    callPosition(){
        // console.log('Initiating positioning');
        var id = this.elementId;

        // Set the target destination
        let day = this.get('session.day');
        let time = this.get('session.time');
        let destination = day+time;
        // console.log(destination);
        this.sendAction('position', id, destination);
    },
    // Call the controller's positioning action on the creation of the component
    didInsertElement(){
        // console.log('Element Inserted');
        this.callPosition();
    },

    // Edit the session on doubleClick
    doubleClick(){
        this.sendAction('edit');
    },

    dragStart(event){
        // Send the session ID
        let sessionId = this.get('session.id');
        let sessionElementId = this.get('elementId');
        let session = {'session': sessionId, 'sessionElementId': sessionElementId};
        // {draggableId:event.target.id};
        let data = JSON.stringify(session);

        // event.dropEffect = "move";
        //TODO - Bring all gridunits to the foreground, then reset on drop.
        // $.get('gridunit').css("z-index", 1);

        return event.dataTransfer.setData('text', data);
        //return event.dataTransfer.setData('text', event.target.id);
    },


    actions: {

    }

});
