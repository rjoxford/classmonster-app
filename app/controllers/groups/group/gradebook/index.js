import Ember from 'ember';

export default Ember.Controller.extend({


    //Properties
    viewByClassification:   true,
    viewByUnits:      false,
    viewByStudents:   false,

    resetL1Views:   function(){
            this.set('viewByClassification', false);
            this.set('viewByUnits', false);
            this.set('viewByStudents', false);
        },

    //Actions
    actions: {


        //Level 1 controls
        togViewByClassification(){
            this.resetL1Views();
            this.toggleProperty('viewByClassification');
        },

        togViewByUnits(){
            this.resetL1Views();
            this.toggleProperty('viewByUnits');
        },


        togViewByStudents(){
            this.resetL1Views();
            this.toggleProperty('viewByStudents');
        },



    }
});
