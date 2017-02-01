import Ember from 'ember';

export default Ember.Controller.extend({

    isEditing: false,
    addForm: false,
    showStudents: false,

    feedback:   {   group: "8Na1",
                    message: "Turkey"
                },

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
        }


        
    }
});
