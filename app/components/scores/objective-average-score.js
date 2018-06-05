// Returns the average score a class get for a given objective

import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),

    averageScore: 0,

    displayScore: Ember.computed('averageScore', function(){
        let score = this.get('averageScore');
        if (score>0) {
            return score;
        } else {
            return "-";
        }
    }),


    didReceiveAttrs(){
        let students = this.get('group.students');
        let objective = this.get('objective');
        let store = this.get('store');
        let _this = this;

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
            let scoreCount = 0;
            if(scores.length>0){
                scores.forEach((score)=>{
                    // If the score exists(is 1-3), then consider for average
                    if (score.value) {
                        scoreTotal = scoreTotal + score.value.get('score');
                        scoreCount = scoreCount + 1;
                    }
                });
                // If any score have indeed been counted
                if (scoreCount>0) {
                    var average = Math.round((scoreTotal/scoreCount)*10)/10;
                    _this.set('averageScore', average);
                } else {
                    //_this.set('averageScore', "-")
                }

            } else {
                //_this.set('averageScore', "-");
            }
        });
    },

});
