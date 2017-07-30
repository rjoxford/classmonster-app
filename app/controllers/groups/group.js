import Ember from 'ember';

export default Ember.Controller.extend({

    isEditing: false,
    addForm: false,
    showStudents: false,

    feedback:   {   group: "8Na1",
                    message: "Turkey"
                },

    scoredObjectives: Ember.computed( function(){
        // Look up the class's current unit
        // console.log(this.get('model'));

        // Return the set of objectives in this unit
        var unit = this.get('model.currentUnit');
        console.log(unit);

        // For each student, return the student id and their score

        // Desired outcome: an array of objects. Each objective and the average score for it
        // {objectiveId: (Ember Object),
        // averageScore : number }
        return "Sample";
    }),

    actions: {

        edit: function(){
            this.set('isEditing', true);
        },

        done: function(){
            this.set('isEditing', false);
        },

        addStudent: function(){
            this.set('addForm', true);
        },

        saveStudent: function(){
            var self = this;
            var group = this.get('model');
            var name = this.get('studentName');    //studentName from input box

            var newStudent = this.store.createRecord('student', {
                name: name,
                group: group
            });
            newStudent.save().then(function(){
                self.set('studentName', "");
                self.set('addForm', false);
            });
        },

        deleteStudent: function(student){
            student.destroyRecord();
        },


        togShowStudents: function(){
            this.toggleProperty('showStudents');
        },




    }
});
