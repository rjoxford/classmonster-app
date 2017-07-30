import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),

    averageScore: "",

    classNameBindings: ['colorClass'],

    colorClass: Ember.computed('averageScore', function(){
        return "rag-color-2.1";
    }),

    didReceiveAttrs(){
        var students = this.get('group.students');
        var objective = this.get('objective');
        var store = this.get('store');
        var _this = this;

        // Create an array of promises of each student's scores
        var promises = [];
        students.forEach((student) => {
            var studentId = student.get('id');
            var objectiveId = objective.get('id');
            var newPromise = store.queryRecord('snapscore', { 'student' : studentId, 'objective': objectiveId });
            promises.pushObject(newPromise);
        });
        // When promises resolve, find and return the average
        Ember.RSVP.allSettled(promises).then(function(scores){
            let scoreTotal = 0;
            let scoreCount = scores.length;
            scores.forEach((score)=>{
                scoreTotal = scoreTotal + score.value.get('score');
            });
            if(scoreCount>0){
                console.log(scoreTotal/scoreCount);
                var average = Math.round((scoreTotal/scoreCount)*10)/10;
                console.log(average);
                _this.set('averageScore', average);
            } else {
                _this.set('averageScore', "-");
            }
        });
    },

});

//
// store.queryRecord('snapscore', { 'student' : studentId, 'objective': objectiveId }).then(function(score){
//     if(score){
//         console.log("Student:  " + student.get('id') + " has a score of " + score.get('score') + "for objective " + objective.get('name'));
//     };
// });
