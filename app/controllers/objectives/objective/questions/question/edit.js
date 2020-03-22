import Ember from 'ember';

export default Ember.Controller.extend({

actions: {

    saveQuestion(model){
        // var question = this.get('model');
        var _this = this;
        model.save().then(function(){
            _this.transitionToRoute('objectives.objective.questions');
        });
    },

    cancel(model){
        model.rollbackAttributes();
        this.transitionToRoute('objectives.objective.questions');
    }

}

});
