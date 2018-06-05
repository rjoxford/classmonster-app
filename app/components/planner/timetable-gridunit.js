import Ember from 'ember';

export default Ember.Component.extend({

    tagName: "td",
    classNames: "timetable-gridunit",
    classNameBindings: [ 'className', 'gridunitId', 'dragClass' ],
    dragClass         : 'deactivated',


    gridunitId: Ember.computed(function(){
        let time = this.get('time');
        let day = this.get('day');
        return day+time;
    }),

    // Observe a property to fill the timetable slot and prevent it from being booked over / double booked
    gridunitActivated: true,
    className: Ember.computed(function(){

        if (this.get('gridunitActivated')) {
            return "timetable-gridunit-activated";
        }
        else {
            return "timetable-gridunit-deactivated";
        }
    }),

    dragLeave(event){
        event.preventDefault();
        this.set('dragClass', 'deactivated');
    },

    dragOver(event){
        event.preventDefault();
        this.set('dragClass', 'activated');
    },

    drop(event){
        // Load the new times and day
        let time = this.get('time');
        let day = this.get('day');
        // Load the data from the drag
        let data = event.dataTransfer.getData('text');
        data = JSON.parse(data);
        // Set the time and day
        data.newTime = time;
        data.newDay = day;
        console.log(data);
        this.set('dragClass', 'deactivated');
        this.sendAction('onDrop', data);
    },


    click(){
        let time = this.get('time');
        let day = this.get('day');
        // console.log(this.get('gridunitActivated'));
        this.set('gridunitActivated', false);
        // console.log(this.get('gridunitActivated'));
        this.sendAction('onClick', day, time);
    },

});
