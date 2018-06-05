import Ember from 'ember';

export default Ember.Component.extend({

classNameBindings: ['colorClass'],

colorClass: Ember.computed('score', function(){
    let score = this.get('score');
    if (score>0) {
        score = score*10;
    }
    return "rag-color-" + score;
}),

});
