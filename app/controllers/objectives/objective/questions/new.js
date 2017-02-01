import Ember from 'ember';

export default Ember.Controller.extend({

    question: Ember.computed(function(){
        var model = this.get('model');
        return this.store.createRecord('question', {'objective': model});
    }),

    actions: {

        submit(model){
            // var question = this.get('model');
            var _this = this;
            model.set('objective', 2);
            model.set('length', "Medium");
            model.set('difficulty', "Hard");
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
