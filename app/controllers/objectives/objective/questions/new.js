import Ember from 'ember';

export default Ember.Controller.extend({

    // question: Ember.Object.extend(),
    question: Ember.computed(function(){
        return this.store.createRecord('question', {
            objective : this.get('model')
        });
    }),

    actions: {

        // submit(){
        //     let question = this.get('question');
        //     let objective = this.get('model');
        //     let newQuestion = this.store.createRecord('question', {
        //         'objective': objective,
        //         'length': "Medium",
        //         'difficulty': "Hard",
        //         'questionText': question.get('questionText')
        //     });
        //     newQuestion.save().then(function(){
        //         _this.transitionToRoute('objectives.objective.questions');
        //     });
        // },
        saveQuestion(){
            var _this = this;
            let question = this.get('question');
            question.save().then(function(){
                _this.transitionToRoute('objectives.objective.questions');
            });
        },

        cancel(question){
            this.transitionToRoute('objectives.objective.questions');
        }

    }

});
