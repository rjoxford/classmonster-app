import Ember from 'ember';

export default Ember.Controller.extend({

    // To facilitate sorting the model
    assessmentQuestions: Ember.computed('model.[]', function(){
        return this.get('model').get('assessmentQuestions').sortBy('questionNumber');
    }),

});
