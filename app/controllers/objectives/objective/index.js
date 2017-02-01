import Ember from 'ember';

export default Ember.Controller.extend({

    //Properties
    viewCommunityLesson:   true,
    viewPrerequisites:      false,
    viewResources:      false,
    viewUpload:   false,

    resetL1Views:   function(){
        this.set('viewCommunityLesson', false);
        this.set('viewPrerequisites', false);
        this.set('viewResources', false);
        this.set('viewUpload', false);
    },

    //Actions
    actions: {
        

        //Level 1 controls
        togViewCommunityLesson(){
            this.resetL1Views();
            this.toggleProperty('viewCommunityLesson');
        },
        
        togViewPrerequisites(){
            this.resetL1Views();
            this.toggleProperty('viewPrerequisites');
        },


        togViewResources(){
            this.resetL1Views();
            this.toggleProperty('viewResources');
        },

        togViewUpload(){
            this.resetL1Views();
            this.toggleProperty('viewUpload');
        },
    
}
});
