import Ember from 'ember';

export default Ember.Controller.extend(Ember.Evented, {


    //  Properties
    viewSNAP        :   true,
    viewLevels      : false,
    viewBehaviour   : false,
    viewPlans       : false,

    //Method hides all the views allowing a single view to be set to true
    hideallviews(){
        this.set('viewSNAP', false);
        this.set('viewLevels', false);
        this.set('viewBehaviour', false);
        this.set('viewPlans', false);
    },


    //To display the grid over which the drag and drop is effective
    //droppable property prevents gridunits at the edge from being drop sites
    gridarray: function(){
        var gridarray = [];
        for (var i = 0; i<500; i++){
            var mod = i%10;
            var item;
            if(mod === 9){
                item = {'id': i, 'droppable': false};
            } else {
                item = {'id': i, 'droppable': true};
            }
            gridarray.push(item);
        }
        return gridarray;
    }.property(),

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
        // TODO  this to update/set the group/class's currentObjective property
        setObjective(objective){
            this.set('objective', objective);
            let group = this.get('model');
            group.set('currentObjective', objective);
            group.save();
        },

        // sendScore: function(student, score){
        //     var objective = this.get('objective');
        // },

        alert: function(){
            alert('Alert you fool!');
        },

        behaviourGood: function(){
            console.log('Action handled by the Seating Plan Controller');
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
        position: function(studentId, draggableId){
            //Find the seatposition for the chosen plan
            //.. Find the plan
            var plan = this.get('plan');
            ////.. Find the seatposition
            this.store.queryRecord('seatposition', { 'student' : studentId, 'plan': plan }).then(function(seatposition){
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
            });

            //If no seatposition exists?
        },

        dropAction: function(data){
            var this_plan = this.get('plan');

            //Get the dropped on gridunit
            var gridunit = Ember.$(event.target);
            var gridId = parseInt(gridunit.text());

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

        }

    }

});
