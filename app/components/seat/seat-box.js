import Ember from 'ember';

export default Ember.Component.extend(Ember.Evented, {

    store : Ember.inject.service(),

    //Properties
    classNames        : [ 'seatbox', 'draggableItem' ],
    classNameBindings : [ 'class' ],
    attributeBindings : [ 'draggable' ],
    position          : 'position',
    echo              : 'echo',

    draggable         : 'true',
    pos_x             : null,
    pos_y             : null,
    onGrid            : "",

    score : 1,
    snapscore: Ember.computed('objective', function(){
        var objective = this.get('objective');
        if(!objective){
            console.log('No objective found, exiting');
            return;
        };
        console.log(objective.get('id'));
        var student = this.get('student');
        console.log(student.get('id'));
        // Look for a record of a score for that objective
        var store = this.get('store');
        var snapscore = store.queryRecord('snapscore', {
            'student' : student,
            'objective' : objective
        });
        return snapscore.then(function(snapscore){
            if(snapscore){
                // If the score exists then return the score
                console.log('some kind of record has been found...');
                console.log(snapscore);
                return snapscore;
            } else {
                // Else create a new score
                var newSnapscore = store.createRecord('snapscore', {
                    'score' : 0,
                    'student' : student,
                    'objective' : objective,
                });
                newSnapscore.save();
                return newSnapscore;
            };
        });
    }),

    // Calls the position action on the seating plan controller.
    callPosition      : function(){
        var studentId = this.get('student.id');
        var draggableId = this.elementId;
        this.sendAction('position', studentId, draggableId);
    },

    //Observes plan and triggers the repositioning of seats
    planObserver      : Ember.observer('plan', function(){
        this.callPosition();
    }),

    //Events
    dragStart: function(event) {
        var student = this.get('student');
        var myObject = {targetId:event.target.id, studentId: student.id };
        var data = JSON.stringify(myObject);

        //Todo - Bring all gridunits to the foreground, then reset on drop.
        // $.get('gridunit').css("z-index", 1);

        return event.dataTransfer.setData('text', data);
        //return event.dataTransfer.setData('text', event.target.id);
    },

    didInsertElement: function(){
        this.callPosition();
    },


    //Actions
    actions: {

        save: function(){
            this.get('student').save();
        },

        setPositions: function(){
            //Find the position of the gridunit

            //Set the position of this component to the position of the gridunit
            console.log('setpostions action triggered..?');
        },

        echo: function(){
            this.sendAction('echo');
        },

        save(){
            alert('Saving the student!');
            this.get('student').save();
        },

    }


});
