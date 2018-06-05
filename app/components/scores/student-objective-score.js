import Ember from 'ember';

export default Ember.Component.extend({

store: Ember.inject.service(),

score: null,

didReceiveAttrs(){
    // Exit if either objective or student is not set, and return "!"
    if (!this.get('student') || !this.get('objective') ) {
        this.set('score', "!");
        return;
    }

    let student = this.get('student');
    let objective = this.get('objective');
    let store = this.get('store');
    let _this = this;

    // PeekRecord if possible...
    let score = store.queryRecord('snapscore', { 'student': student.id, 'objective' : objective.id });
    score.then( function(score){
            // If a score is found, set the score to score
            if (score) {
                _this.set('score', score.get('score'));
            } else {
                _this.set('score', "-");
            }
        }, function(reason){
            _this.set('score', "-");
        })
}

});
