import Ember from 'ember';

export default Ember.Controller.extend({

hasMultiChoice: false,
hasPicture: false,
hasAdvice: false,

resetValues: function(){
    this.set('length', "");
},

actions: {

    saveQuestion(){
        //Find the inputs
        var length = this.get('length');
        var difficulty = this.get('difficulty');
        var questionText = this.get('questionText');

        var hasPicture = this.get('hasPicture');
        var picture = this.get('picture');

        var hasAdvice = this.get('hasAdvice');
        var advice = this.get('advice');

        var answer = this.get('answer');
        var hasMultiChoice = this.get('hasMultiChoice');
        var answer2 = this.get('answer2');
        var answer3 = this.get('answer3');
        var answer4 = this.get('answer4');


        alert("Question submitted!");

        var newQuestion = this.store.createRecord('question', {
            length: 'Instant',
            difficulty: 'Easy',
            questionText: questionText,
            hasPicture: hasPicture,
            hasAdvice: hasAdvice,
            advice: advice,
            answer: answer,
            hasMultiChoice: hasMultiChoice,
            answer2: answer2,
            answer3: answer3,
            answer4: answer4
        })
        newQuestion.save();

    }

},

});
