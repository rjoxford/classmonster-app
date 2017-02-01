import Ember from 'ember';

export default Ember.Controller.extend({


    //Properties
    viewOverview:       true,
    viewUnits:          false,
    viewPriorities:     false,


    selectedUnit:       {name: "Shawaddywaddy"},



    //Observes changing the selectedUnit, and find the appropriate scores for the objectives within that unit.
    //TODO - convoluted. too many API calls, too much waiting on promises. A nested route here with set model would probably be better Ember way
    scoresObserver: Ember.observer('selectedUnit', function(){
        var _this = this;
        scoresObserverFunction();
        //TODO figure out and implement Ember.run.once()
        function scoresObserverFunction(){
            //Get the ids of the currently selected unit. TODO this currently requires get to return a promise
            //(it won't if already loaded)
            //clear the existing scoreSet
            _this.set('scoresArray', []);
            var studentId = _this.get('model.id');
            var selectedUnit = _this.get('selectedUnit');
            //TODO selectedUnit will not always return a promise, this needs changing.
            selectedUnit.then(setScoresArray(selectedUnit));

            function setScoresArray(unit){
                var objectivesSet = unit.get('objectives');
                var objectivesArray = objectivesSet.getEach('id');
                //For each objectiveId within the set.
                objectivesArray.forEach(function(objectiveId){
                    //Find the actual objective - to gain id and name
                    var objective = _this.store.find('objective', objectiveId);
                    objective.then(function(objective){
                        //find the student's score for that objective.
                        var score = _this.store.queryRecord('score', {student: studentId, objective: objectiveId});
                        score.then(function(score){
                            //Load both into an array - the studentScores property of this controller - TODO refactor this
                            var scoreObject = { 'objective': objective, 'score':score };
                            _this.scoresArray.pushObject(scoreObject);
                        });
                    });
                });
            }
        }
    }),

    scoresArray: [],

    resetL1Views:   function(){
        this.set('viewOverview', false);
        this.set('viewUnits', false);
        this.set('viewPriorities', false);
    },

    //Actions
    actions: {

        //Different views - TODO should probably be different routes?
        togViewOverview(){
            this.resetL1Views();
            this.toggleProperty('viewOverview');
        },
        togViewUnits(){
            this.resetL1Views();
            this.toggleProperty('viewUnits');
        },
        togViewPriorities(){
            this.resetL1Views();
            this.toggleProperty('viewPriorities');
        },


        test(item){
            //Load the objectiveId, and the studentId
            var _this = this;
            var objectiveId = item.objective.id;
            var studentId = this.model.id;
            //Check if a score exists for the objective
            var scoreRecord = this.store.queryRecord('score', {student: studentId, objective: objectiveId});
            scoreRecord.then(function(scoreRecord){
                //If exists
                if(scoreRecord){
                    //then toggle the score
                    var score = scoreRecord.get('score');
                    score = toggleScore(score);
                    //save the new score
                    scoreRecord.set('score', score);
                    scoreRecord.save();
                } else {
                //If not
                    //post a new score, setting the score as 1(red)
                    var newScoreRecord = _this.store.createRecord('score', {
                        student: _this.get('model'),
                        objective: item.objective,
                        score: 1
                    });
                    newScoreRecord.save();
                }
                //TODO this must also update the ScoresArray - How to make this happen automatically?
            });




            function toggleScore(score){
            //Toggles the score.
            //Arguments=> score: integer; Returns: integer
                if (score<1){
                    return 1;
                } else if (score===1){
                    return 2;
                } else if (score===2){
                    return 3;
                } else if (score===3){
                    return 1;
                } else {
                    return 1;
                }
            }

        },
        test2(){
            var number = 1;
            console.log(number+113);
        },


        setSelectedUnit(unit){
            this.set('selectedUnit', unit);
        },

}
});
