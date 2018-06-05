import Ember from 'ember';

export default Ember.Controller.extend({

// Arrays for constructing timetable
timesArray: ["08-00", "09-00", "10-00","11-00","12-00","13-00","14-00", "15-00", "16-00"],
daysArray: ["mon", "tue", "wed", "thu", "fri"],


// Array for forming grid
// TODO - not currently used, but more appropriate for seating plan
gridCols: 5,
gridRows: 4,
gridArray: Ember.computed('gridCols', 'gridRows', function(){
    let cols = this.get('gridCols');
    let rows = this.get('gridRows');
    let gridarray= [];
    //For each column
    for (var col = 0; col < cols; col++) {
        let colIndex = String.fromCharCode(97 + col);
        //for each row push an item
        for (var row = 0; row < rows; row++) {
            let index = colIndex + String(row);
            gridarray.push(index);
        }
    }
    return gridarray;
}),

// Holding variables for adding a session
isAddingSession: false,
selectedDay: null,
selectedTime: null,

// Controls for viewing options in a modal
viewNewSessionModal: false,

// Look up classes for populating new sessions
groups: Ember.computed(function(){
    return this.store.findAll('group')
}),

actions: {

    // Brings controls for adding a new session, and provides clicked griunit's session day/time
    addSession(day, time){
        this.set('isAddingSession', true);
        this.set('selectedDay', day);
        this.set('selectedTime', time);
        this.set('viewNewSessionModal', true);
    },

    cancelAddSession(){
        this.set('viewNewSessionModal', false);
    },

    saveSession(){
        console.log("Saving new session");
        // Get requisite variables
        let day = this.get('selectedDay');
        let time = this.get('selectedTime');
        let groupName = this.get('groupName');

        // TODO - Develop a means for checking there are no existing sessions in place.

        // Save a new timetable session into the store
        let newSession = this.store.createRecord('timetable-session', {
            day: day,
            time: time,
            groupName: groupName,
            duration: "one"
        });
        newSession.save().then(function(session){
            alert("New session saved for " + session.get('groupName'));
        });
        this.set('viewNewSessionModal', false);

    },


    // Position the session over the timetable
    positionSession(id, destination){
        console.log("Postioning the session");
        console.log(id);
        // Set the target destination
        // Find the element with target class name
        console.log('Destination: ');
        console.log(destination);
        // TODO problem is with Jquery selecting the target dest by class
        let gridunit = Ember.$('.' + destination);
        console.log(gridunit);
        // console.log(gridunit);

        //..Get the destination's x and y position
        let dest_x = gridunit.position().left;
        let dest_y = gridunit.position().top;
        console.log('dest_x = ' + dest_x );
        console.log('dest_y = ' + dest_y );

        //..TODO - positioning above is not absolute.
        // Add on table top and left
        let timetable = Ember.$('.timetable-table');
        let left = timetable.position().left;
        let top = timetable.position().top;

        //Set position of the component to the position of the gridunit
        //..Set the position to the destination x and y
        var session = document.getElementById(id);
        session.style.position = "absolute";
        session.style.left = dest_x + left + 5 +"px";
        session.style.top = dest_y + top + 5 + "px";
    },

    test(){
        this.gridArray();
    },


    // Controls for expanding the grid areal, with min and max sizes
    addRow(){
        this.incrementProperty('gridRows');
    },
    deleteRow(){

        this.decrementProperty('gridRows');
    },
    addCol(){
        if (this.get('gridCols')==26) {
            alert("Maximum Reached");
            return;
        }
        this.incrementProperty('gridCols');
    },
    deleteCol(){
        if (this.get('gridCols')==1) {
            alert("Maximum Reached");
            return;
        }
        this.decrementProperty('gridCols');
    }

}


});
