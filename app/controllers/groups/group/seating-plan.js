import Ember from 'ember';

export default Ember.Controller.extend(Ember.Evented, {

    // queryParams: [ 'objective' ],


    //  Properties
    viewSNAP        :   true,
    viewLevels      : false,
    viewBehaviour   : false,
    viewPlans       : false,
    // TODO add grid controls show/hide
    viewGridControls: false,

    //Method hides all the views allowing a single view to be set to true
    hideallviews(){
        this.set('viewSNAP', false);
        this.set('viewLevels', false);
        this.set('viewBehaviour', false);
        this.set('viewPlans', false);
    },


    //To display the grid over which the drag and drop is effective
    //droppable property prevents gridunits at the edge from being drop sites
    // gridarray: Ember.computed(function(){
    //     var gridarray = [];
    //     for (var i = 0; i<500; i++){
    //         var mod = i%10;
    //         var item;
    //         if(mod === 9){
    //             item = {'id': i, 'droppable': false};
    //         } else {
    //             item = {'id': i, 'droppable': true};
    //         }
    //         gridarray.push(item);
    //     }
    //     return gridarray;
    // }),
    gridCols: 20,
    gridRows: 16,
    gridArray: Ember.computed('gridCols', 'gridRows', function(){
        let cols = this.get('gridCols');
        let rows = this.get('gridRows');
        let gridarray= [];
        let gridrows = []
        //For each row
        for (var row = 1; row < rows+1; row++) {
            let gridrow = [];
            //for each col push an item
            for (var col = 0; col < cols; col++) {
                let colIndex = String.fromCharCode(97 + col);
                let id = colIndex + String(row);
                let droppable;
                // Prevent drop for edge of grid
                if ( (col<cols-2)||(row<rows-2) ) {
                    droppable = true;
                } else {
                    droppable = false;
                }
                let gridunit = {
                    'row' : row,
                    'gridunit' : {
                        'col' : colIndex,
                        'row' : row,
                        'id' : id,
                        'droppable' : droppable
                    }
                };
                gridrow.push(gridunit);
            }
            gridarray.push(gridrow);
        }
        return gridarray;
    }),

    //Set the class's currentObjective as the 'objective'
    objective: Ember.computed(function(){
        return this.get('model').get('currentObjective');
    }),

    //The seating plan number selected. (defaults to 1). Passed to each seatbox component.
    plan: 1,
    // A simple array to set different seating plans -- TODO update this to
    //     - named seating plans, and ultimately include seating plan generator
    plans: Ember.computed(function(){

    }),


    //  Actions
    actions: {

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
                alert("Minimum Reached");
                return;
            }
            this.decrementProperty('gridCols');
        },


        // TODO  this to update/set the group/class's currentObjective property
        setObjective(objective){
            this.set('objective', objective);
            let group = this.get('model');
            group.set('currentObjective', objective);
            group.save();
        },

        alert(){
            alert('Alert you fool!');
        },

        //Control the views. TODO DRY up
        ShowSNAP: function(){
            this.hideallviews();
            this.set('viewSNAP', true);
        },
        ShowLevels: function(){
            this.hideallviews();
            this.set('viewLevels', true);
        },
        ShowBehaviour: function(){
            this.hideallviews();
            this.set('viewBehaviour', true);
        },
        ShowPlans: function(){
            this.hideallviews();
            this.set('viewPlans', true);
        },


        //Sets the position of the seat-box component
        //Called by the component, with params sent
        position(studentId, draggableId){
            //Find the seatposition for the chosen plan
            //.. Find the plan
            var plan = this.get('plan');
            ////.. Query for a seatposition
            this.store.queryRecord('seatposition', { 'student' : studentId, 'plan': plan }).then(function(seatposition){
                // If a seatposition exists, then position the seatbox
                if (seatposition) {
                    //Find the position of the gridpos
                    var gridpos = seatposition.get('gridpos');
                    // console.log(gridpos);
                    var gridunit = Ember.$('.g' + gridpos);
                    // console.log(gridunit);
                    //..Get the destination's x and y position
                    var dest_x = gridunit.position().left;
                    var dest_y = gridunit.position().top;
                    // console.log('dest_x = ' + dest_x );
                    // console.log('dest_y = ' + dest_y );

                    //Set position of the component to the position of the gridunit
                    //..Set the draggable's position to the destination x and y
                    var draggable = document.getElementById(draggableId);
                    draggable.style.position = "absolute";
                    draggable.style.left = dest_x + "px";
                    draggable.style.top = dest_y + "px";
                }
            }, function(reason){
                // On Failure
                console.log('Seatposition query failed.');
                console.log(reason);
            });

            //If no seatposition exists?
        },

        dropAction(data){
            var this_plan = this.get('plan');

            //Get the dropped on gridunit
            var gridunit = Ember.$(event.target);
            var gridId = gridunit.text();

            //Get the draggable
            data = JSON.parse(data);
            //var draggable = Ember.$(data.targetId);
            var draggableId = data.targetId;
            var draggable = document.getElementById(draggableId);

            //Get the destination's x and y position
            var dest_x = gridunit.position().left;
            var dest_y = gridunit.position().top;

            //Set the draggable's position to the x and y
            draggable.style.position = "absolute";
            draggable.style.left = dest_x + "px";
            draggable.style.top = dest_y + "px";


            //Save the position as the student's position for that plan number
            //..Look up the student
            var studentId = data.studentId;
            var student = this.store.peekRecord('student', studentId);

            //..See if a seatposition record already exists for that plan number
            var _this = this;
            this.store.queryRecord('seatposition', { 'student':studentId, 'plan' : this_plan }).then(function(seatposition){
                //.. ..If it does then replace
                if(seatposition){
                    seatposition.set('gridpos', gridId);
                    seatposition.save();
                    //console.log('Updating the previous seatposition record');
                } else {
                    //.. .. If not then create the record
                    //console.log('Creating a new seatposition record');
                    var newseatposition = _this.store.createRecord('seatposition', {
                        plan: this_plan,
                        gridpos: gridId,
                        student: student,
                    });
                    newseatposition.save();
                }
            });

        },

        // Seating Plan Behaviour Controls
        behaviourGood: function(){
            console.log('Action handled by the Seating Plan Controller');
        },

    }

});
