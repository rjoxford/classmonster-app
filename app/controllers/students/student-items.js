import Ember from 'ember';

export default Ember.ObjectController.extend({

    showLevel3: false,
    showLevel4: false,
    showLevel5: false,

    actions: {
        togShowLevel3: function(){
            this.toggleProperty('showLevel3');
        }
    

    }
});
