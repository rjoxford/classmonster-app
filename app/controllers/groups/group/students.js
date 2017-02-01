import Ember from 'ember';

export default Ember.Controller.extend({

viewStudents: true,
viewL1Controls: true,
viewAddNewStudent: false,
viewRemoveStudent: false,
viewTransfer: false,
viewImportStudents: false,


//Hides the controls and student viewer from the view, ready to show components for adding/removing students
hideAll(){
    this.setProperties( {
        viewStudents: false,
        viewL1Controls: false,
    });
},
showAll(){
    this.setProperties( {
        viewStudents: true,
        viewL1Controls: true,
    });
},

//Lifecycle - on transition from component, ensure that showAll is called
deactivate(){
    alert('Leaving this page...!');
},

//TODO DDAU create a mock student object for verification etc.
studentFO: Ember.computed(function(){
    const conStudent = Ember.Object.extend();
    let student = conStudent.create();
    return student;
}),

actions: {

    // Area for test actions
    test(){
        console.log(this.get('student'));
    },

    //Add Single New Student actions
    showAddNewStudent(){
        this.hideAll();
        this.set('viewAddNewStudent', true);
    },
    hideAddNewStudent(){
        this.showAll();
        this.set('viewAddNewStudent', false);
    },
    addNewStudent(){
        var studentFO = this.get('studentFO');
        var student = this.store.createRecord( 'student', {
            name: studentFO.forename,
            group: this.get('model'),
        });
        student.save().then(function(){
            alert('New Student Saved!');
        })
        this.send('hideAddNewStudent');
    },
    cancelAddNewStudent(){
        this.send('hideAddNewStudent');
    },


    //Transfer student from another class actions
    showTransfer(){
        this.hideAll();
        this.set('viewTransfer', true);
    },
    hideTransfer(){
        this.showAll();
        this.set('viewTransfer', false);
    },
    cancelTransfer(){
        this.send('hideTransfer');
    },


    //Add multiple students actions
    showImportStudents(){
        this.set('viewImportStudents', true);
        this.hideAll();
    },
    hideImportStudents(){
        this.set('viewImportStudents', false);
        this.showAll();
    },
    cancelImportStudents(){
        this.send('hideImportStudents');
    },


    //Remove students from class actions
    showRemoveStudent(){
        this.hideAll();
        this.set("viewStudents", true);
        this.toggleProperty('viewRemoveStudent');
    },
    removeStudent(student){
        student.set('group', "holding");
        student.save();
        alert('Student removed from this class. Sent to school holding area.');
    },
    cancelRemoveStudent(){
        this.set('viewRemoveStudent', false);
        this.showAll();
    },


},

});
