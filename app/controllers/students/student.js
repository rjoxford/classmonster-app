import Ember from 'ember';

export default Ember.Controller.extend({

    //itemController: 'students/student-items',
    showLevel3: false,
    showLevel4: false,
    showLevel5: false,

    actions: {
        togShowLevel3: function(){
            this.toggleProperty('showLevel3');
        }
    }

});
