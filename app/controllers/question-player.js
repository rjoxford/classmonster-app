import Ember from 'ember';

export default Ember.Controller.extend({

queryParams: ['group', {'objectives': {type: 'array'}}],
objectives: null,
group: null,


// The selected group
viewGroups: true,
selectedGroup: null,
groups: Ember.computed(function(){
    return this.get('store').findAll('group');
}),

// View selector for how to find objectives
viewFindObjsBy: false,


// Selecting Unit Controls
viewUnits: false,
selectedUnit: null,

objectivesObserver: Ember.observer('objectives', function(){
    console.log("Observer detects the setting of the objectives");
}),

// The set of objectives used to find/generate questions
selectedObjectives: Ember.computed('objectives', function(){
    console.log("A change has been detected!");
    console.log(this.get('objectives'));
}),


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

    test(){
        let objectives = this.get('objectives');
        console.log(objectives);
        console.log(typeof(objectives));
    },

    togViewSettings(){
        this.toggleProperty('viewSettings');
    },
    setViewGroups(){
        this.set('viewFindObjsBy', false);
        this.set('viewGroups', true);
    },
    setViewUnits(){
        this.set('viewFindObjsBy', false);
        this.set('viewUnits', true);
    },
    setSelectedGroup(group){
        // Set the appropriate view
        this.set('viewGroups', false);
        this.set('viewFindObjsBy', true);
        // Set the group to group and to queryParams
        this.set('selectedGroup', group);
        this.set('group', group.get('id'));
    },

    setSelectedUnit(unit){
        // Set the appropriate view
        this.set('viewUnits', false);
        this.set('viewSettings', true);
        // Set the objectives to queryParams
        this.set('selectedUnit', unit);
        let _this = this;
        let objectives = unit.get('objectives').then(function(objectives){
            let myarray = objectives.map(function(objective){
                return Number(objective.get('id'));
            });
            _this.set('objectives', myarray);
        });
    },
    setObjectives(){

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
