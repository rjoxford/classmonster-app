import Ember from 'ember';

export default Ember.Controller.extend({




// View selector for how to find objectives
viewFindObjsBy: true,
// Find


// The selected group
viewGroups: false,
selectedGroup: null,
groups: Ember.computed(function(){
    return this.get('store').findAll('group');
}),

// Selecting Unit Controls
viewUnits: false,
selectedUnit: null,


// View the basic settings for the player, including timings etc
settings: null,
viewSettings: false,


viewPlayer: false,

// Questions to be set
questions: null,
activeQuestion: null,
questionIteration: null,
answers: null,


actions: {

    togViewSettings(){
        this.toggleProperty('viewSettings');
    },
    setViewGroups(){
        this.set('viewFindObjsBy', false);
        this.set('viewGroups', true);
    },
    setSelectedGroup(group){
        this.set('selectedGroup', group);
        this.set('viewGroups', false);
        this.set('viewUnits', true);
    },
    setSelectedUnit(unit){
        this.set('selectedUnit', unit);
        this.set('viewUnits', false);
        this.set('viewSettings', true);
    },
    startQuiz(){
        let _this = this;
        let questions = this.store.findAll('question');
        this.set('questions', questions);
        questions.then( (questions)=>{
            this.set('activeQuestion', questions.get('firstObject'));
        } )
        this.incrementProperty('questionIteration');
    },
    nextQuestion(){
        
    },


}

});
