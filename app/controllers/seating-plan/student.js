import Ember from 'ember';
import StudentController from '.';

export default StudentController.extend({

    //Dependencies
    needs:  'seating-plan',



    //Aliases - sp for shorthand in templates etc.
    sp:     Ember.computed.alias('controllers.seating-plan'),



    //Properties
    score: function(){
        return this.get('model.number');
    }.property('model.number'),

    //TODO Observer to change, and be ready on initial loading. 
    snapRed: false,
    snapAmber: false,
    snapGreen: false,
    snapObserver: function(){
        var score = this.get('score');
        this.setProperties({ snapRed:false, snapAmber: false, snapGreen: false });
        if (score===1){
            this.set('snapRed', true);
        } else if (score===2){
            this.set('snapAmber', true);
        } else if (score===3){
            this.set('snapGreen', true);
        }
    }.observes('score'),


    //Acitons
    actions: {
        toggleScore: function(student){
            var score = student.get('number');
            if (score<1){
                student.set('number', 1);
            } else if (score===1){
                student.set('number', 2);
            } else if (score===2){
                student.set('number', 3);
            } else if (score===3){
                student.set('number', 1);
            } else {
                student.set('number', 1);
            }
            student.save();
        }
    }
});
