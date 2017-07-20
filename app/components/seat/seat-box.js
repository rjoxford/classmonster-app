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

    loadsnapscore(){
        // Sets the score property of the seatbox from the loaded snapscore model
        var _this = this;
        var student = this.get('student');
        var objective = this.get('objective');
        // Look for a record of a score for the objective
        var snapscore = this.get('store').queryRecord('snapscore', {
            student : student.get('id'),
            objective : objective.get('id')
        });
        snapscore.then(function(snapscore){
            if(snapscore){
                // If the score exists then return the score
                console.log('some kind of record has been found... Snapscore is: ');
                console.log(snapscore.get('score'));
                _this.set('score', snapscore.get('score'));
            } else {
                // Else create a new score
                var newSnapscore = _this.get('store').createRecord('snapscore', {
                    score : 0,
                    student : student,
                    objective : objective,
                });
                newSnapscore.save();
                _this.set('score', 0);
            };
            // And set snapscore property to the returned or new model
            //
        });
    },


    // Calls the position action on the seating plan controller.
    callPosition(){
        var studentId = this.get('student.id');
        var draggableId = this.elementId;
        this.sendAction('position', studentId, draggableId);
    },

    //Observes plan and triggers the repositioning of seats
    planObserver: Ember.observer('plan', function(){
        this.callPosition();
    }),

    objectiveObserver: Ember.observer('objective', function(){
        console.log(this.get('objective').get('name'));
        this.loadsnapscore();
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
        this.loadsnapscore();
    },



    //Actions
    actions: {

        setSnapScore(){
            // Set the correct score
            var score = this.get('score');
            if (score<3){
                score = score + 1;
            } else if (score===3){
                score = 1;
            };
            this.set('score', score)
            // Peek the objective
            let objective = this.get('objective');
            // Peek the student
            let student = this.get('student');

            // Retrieve the snapscore
            var newsnapscore = this.get('store').queryRecord('snapscore', {
                student: student.get('id'),
                objective: objective.get('id')
            });
            // Set and save the new snapscore
            newsnapscore.then(function(snapscore){
                snapscore.set('score', score);
                snapscore.save();
            })
        },

        setPositions(){
            //Find the position of the gridunit

            //Set the position of this component to the position of the gridunit
            console.log('setpostions action triggered..?');
        },

        echo(){
            this.sendAction('echo');
        },

        save(){
            alert('Saving the student!');
            this.get('student').save();
        },

    }


});
