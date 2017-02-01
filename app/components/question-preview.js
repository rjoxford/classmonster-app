import Ember from 'ember';

export default Ember.Component.extend({

classNames: [ "question-preview", "col-md-12"],

showAnswer: false,
showAdvice: false,
showMulti: false,


actions: {

    togShowAnswer(){
        this.toggleProperty('showAnswer');
    },
    togShowAdvice(){
        this.toggleProperty('showAdvice');
    },
    togShowMulti(){
        this.toggleProperty('showMulti');
    },

},

});
