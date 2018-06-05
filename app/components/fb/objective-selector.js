import Ember from 'ember';

export default Ember.Component.extend({

    actions: {

        // Clear this component...
        togIsSelectingObjective(){
            this.get('togIsSelectingObjective')();
        },

        setTargetObjective(objective){
            let studentFeedback = this.get('studentFeedback');
            studentFeedback.setTargetObjective(objective);
            // Clear the modal
            this.send('togIsSelectingObjective');
        },

    }

});
