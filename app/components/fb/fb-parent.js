import Ember from 'ember';

export default Ember.Component.extend({
// tr tag to maintain table formatting
tagName: 'tr',

// To select the chosen objective from the objectives in the unit.
isSelectingObjective: false,
isSelectingQuestion: false,

actions: {

    togIsSelectingObjective(){
        this.toggleProperty('isSelectingObjective');
    },
    togIsSelectingQuestion(){
        this.toggleProperty('isSelectingQuestion');
    },

    selectQuestion(studentFeedback){
        this.get('selectQuestion')(studentFeedback);
    }

},

});
