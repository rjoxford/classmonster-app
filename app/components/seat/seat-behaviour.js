import Ember from 'ember';

export default Ember.Component.extend({

    behaviourScore: 0,

    //Actions
    actions: {
        behaviourGood: function(){
            this.incrementProperty("bscore");
            this.sendAction('save');

        },

        behaviourBad: function(){
            this.decrementProperty("bscore");
            this.sendAction('save');
        }
    }


});
