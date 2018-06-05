import Ember from 'ember';

export default Ember.Controller.extend({

    //Properties


    //Viewing controls
    viewGeneral: false,
    viewCourse: true,
    viewAssessment: false,
    viewStudents: false,
    viewPriorities: false,
    viewSettings: false,
    resetL1Views(){
        this.set('viewGeneral', false);
        this.set('viewCourse', false);
        this.set('viewAssessment', false);
        this.set('viewStudents', false);
        this.set('viewPriorities', false);
        this.set('viewSettings', false);
    },
    viewColorPalette: false,
    viewDeleteGroup: false,

    //Allows for quickly changing the course the students are enrolled on
    //and the unit studied within that course
    selectingScheme: false,
    selectingUnit: false,



    //Required models
    allSchemes: Ember.computed(function(){
        return this.store.findAll('scheme');
    }),

    scoredObjectives: Ember.computed(function(){
    // Return the set of objectives in this unit
    }),


    //Actions
    actions: {
        setColor(color){
            let group = this.get('model');
            group.set('color', color);
            group.save();
            this.set('viewColorPalette', false);
        },

        //TODO refactor this, pass in argument to single function DRYUP
        togViewGeneral: function(){
            this.resetL1Views();
            this.toggleProperty('viewGeneral');
        },
        togViewCourse: function(){
            this.resetL1Views();
            this.toggleProperty('viewCourse');
        },
        togViewAssessment: function(){
            this.resetL1Views();
            this.toggleProperty('viewAssessment');
        },
        togViewStudents: function(){
            this.resetL1Views();
            this.toggleProperty('viewStudents');
        },
        togViewPriorities: function(){
            this.resetL1Views();
            this.toggleProperty('viewPriorities');
        },
        togViewSettings(){
            this.resetL1Views();
            this.toggleProperty('viewSettings');
        },
        togViewColorPalette(){
            this.toggleProperty('viewColorPalette');
        },
        togViewDeleteGroup(){
            this.toggleProperty('viewDeleteGroup');
        },

        test(){
            // Look up the class's current unit
            // console.log(this.get('model'));

            // Return the set of objectives in this unit
            var objectives = this.get('model.currentUnit.objectives');
            var students = this.get('model.students');
            var _this = this;
            var myarray = [];

            objectives.forEach( function(objective, index){
                myarray.pushObject(objective);
                console.log(objective.get('id') + " : " + objective.get('name'));
                // Get the average score for the students in the class

                var sumscore;
                var sumcount;
                // Find each student's score
                students.forEach((student) => {
                    var studentId = student.get('id');
                    var objectiveId = objective.get('id');
                    _this.store.queryRecord('snapscore', { 'student' : studentId, 'objective': objectiveId }).then(function(score){
                        if(score){
                            console.log("Student:  " + student.get('id') + " has a score of " + score.get('score') + "for objective " + objective.get('name'));
                        };
                    });
                // then find the average of these
                });

            });


            // For each student, return the student id and their score
            // Find each student in the class, and get the scores for each objective

            // Desired outcome: an array of objects. Each objective and the average score for it
            // {objectiveId: (Ember Object),
            // averageScore : number }
        }



    },

});
