import Ember from 'ember';

export default Ember.Controller.extend({


    //Properties
    viewOverview:   true,
    viewUnits:      false,
    viewStudents:   false,

    resetL1Views:   function(){
            this.set('viewOverview', false);
            this.set('viewUnits', false);
            this.set('viewStudents', false);
        },

    //Actions
    actions: {
        

        //Level 1 controls
        togViewOverview(){
            this.resetL1Views();
            this.toggleProperty('viewOverview');
        },
        
        togViewUnits(){
            this.resetL1Views();
            this.toggleProperty('viewUnits');
        },


        togViewStudents(){
            this.resetL1Views();
            this.toggleProperty('viewStudents');
        },

        
    
    }
});
