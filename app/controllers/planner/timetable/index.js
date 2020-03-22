import Ember from 'ember';

// Declare the session class
const Session = Ember.Object.extend({
    selectedDay: null,
    selectedTime: null,
    selectedGroup: null,
});


export default Ember.Controller.extend({

    // Arrays for constructing timetable
    timesArray: ["08-00", "09-00", "10-00","11-00","12-00","13-00","14-00", "15-00", "16-00"],
    daysArray: ["mon", "tue", "wed", "thu", "fri"],
    weeksArray: [ 1, 2],

    session: null,

    // Object to hold params for the new/editing session
    selectedSession: Ember.computed(function(){
        let selectedSession = Session.create({

        })
    }),

    isAddingSession: false,


    // Controls for viewing options in a modal
    viewNewSessionModal: false,
    viewEditSessionModal: false,

    // Look up classes for populating new sessions
    groups: Ember.computed(function(){
        return this.store.findAll('group');
    }),


    selectedGroups: Ember.computed(function(){
        // // Define the array to be returned
        // let myGroups = [];
        // // Create a new object class
        // const GroupClass = Ember.Object.extend({
        //     group: null,
        //     selected: false
        // });

        // Retrieve models from the store
        let allGroups = this.store.findAll('group');
        // And for each create the new object, pushing to return array
        return allGroups.then(groups=>{
            groups.forEach(item=>{
                item.set('selected', false);
                // let newGroup = GroupClass.create({
                //     group: item
                // });
            })
        });
    }),

    testGroups: Ember.computed('groups', function(){
        // Define the array to be returned
        let allGroups = [];
        // Create a new object class
        const GroupClass = Ember.Object.extend({
            group: null,
            selected: false
        });
        // Retrieve models from the store
        let myGroups =this.get('groups');
        // And for each create the new object, pushing to return array
        myGroups.forEach(item=>{
            console.log(item.get('name'));
            let newGroup = GroupClass.create({
                group: item
            });
            allGroups.pushObject(newGroup);
        });
        return allGroups;
    }),

    mygroups: Ember.computed('groups', function(){
        let groups = this.get('groups');
        groups.forEach(item => {
            item.set('selected', false);
            item.set('word', "Smoke");
        });
        return groups;
    }),

    actions: {
        // Action passed and fired by timetable-gridunit component on drop
        dropSession(data){
            // alert('Dropped on me!');
            // Get the target gridunit time and day

            // Get the session data
            // Load the session model from store
            let sessionId = data.session;
            let session = this.store.peekRecord('timetable-session', sessionId);
            // Set the new session data
            session.set('time', data.newTime);
            session.set('day', data.newDay);
            // Save the updated session
            session.save();

            // Call function to update the session's position
            // Set the target destination
            let sessionElementId = data.sessionElementId;
            let destination = data.newDay+data.newTime;
            this.send('positionSession', sessionElementId, destination)

        },


        setSession(session){
            this.set('session', session);
        },
        editSession(session){
            this.transitionToRoute('planner.timetable.edit-session', session);
            // this.set('selectedSession', session);
            // this.set('viewEditSessionModal', true);
        },
        cancelEditSession(){
            this.set('viewEditSessionModal', false);
        },

        // Brings controls for adding a new session, and provides clicked griunit's session day/time
        addSession(day, time){
            this.set('isAddingSession', true);
            this.set('selectedDay', day);
            this.set('selectedTime', time);
            this.set('viewNewSessionModal', true);
        },
        deleteSession(sessionId){
            let session = this.store.peekRecord('session', sessionId);
            session.destroyRecord();
        },

        cancelAddSession(){
            this.set('viewNewSessionModal', false);
        },

        setSelectedGroup(group){
            // Sets the selected group to a retrieval controller property
            this.set('selectedGroup', group);
        },

        saveSession(){
            // console.log("Saving new session");
            // Get requisite variables
            let day = this.get('selectedDay');
            let time = this.get('selectedTime');
            let group = this.get('selectedGroup');

            // TODO - Develop a means for checking there are no existing sessions in place.

            // Save a new timetable session into the store
            let newSession = this.store.createRecord('timetable-session', {
                day: day,
                time: time,
                group: group,
                duration: "one"
            });
            newSession.save();
            this.set('viewNewSessionModal', false);

        },


        // Position the session over the timetable
        positionSession(id, destination){
            // Set the target destination
            // Find the element with target class name
            // TODO problem is with Jquery selecting the target dest by class
            let gridunit = Ember.$('.' + destination);
            // console.log(gridunit);

            //..Get the destination's x and y position
            let dest_x = gridunit.position().left;
            let dest_y = gridunit.position().top;

            //..TODO - positioning above is not absolute.
            // Add on table top and left
            let timetable = Ember.$('.timetable-week-table');
            let left = timetable.position().left;
            let top = timetable.position().top;

            //Set position of the component to the position of the gridunit
            //..Set the position to the destination x and y
            var session = document.getElementById(id);
            session.style.position = "absolute";
            session.style.left = dest_x + left + 5 +"px";
            session.style.top = dest_y + top + 5 + "px";
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
