import Ember from 'ember';

export default Ember.Component.extend({

    classNameBindings : [ 'colorClass' ],


    colorClass: Ember.computed(function(){
        var score = this.get('score');
        if(score===1){
            return "rag-score-red";
        } else if(score===2){
            return "rag-score-amber";
        } else if(score===3){
            return "rag-score-green";
        } else{
            return "rag-score-blue";
        }
    }),

});
