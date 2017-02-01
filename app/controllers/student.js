//import Ember from 'ember';

//export default Ember.ObjectController.extend({
    
//    needs: 'students',

////properties
//    viewSNAP: false,
//    viewLevels: false,

//    score: null,
     
//    scoreWatcher: function() {
//        var self = this;
//        var allscores = this.get('model.scores');
        
//        //Find the scoreRecord that has the appropriate objective id (in this case just 1)
//        var scoreRecord = allscores.find(function(item){
//            var scoreID = item.get('id');
            
//            return self.store.find('score', scoreID).then(function(scoreRecord){
//                var objID = Number(scoreRecord.get('objective.id'));
//                if (objID === 1){return true;}
//            });
//        });
        
//        //Return the scoreRecord's score attribute
//        var scoreID = scoreRecord.get('id');
//        this.store.find('score', scoreID).then(function(score){
//            var desiredOutcome = score.get('score');
//            self.set('score', desiredOutcome);
//            console.log(desiredOutcome);
//        });
//    }.observes('selectedObjectiveID'),


//    //score: function() {
//    //    var self = this;
//    //    var score;
//    //    var name = this.get('model.name');
//    //    var allscores = this.get('model.scores');
        
//    //    var check = allscores.forEach(function(scoreCall){
//    //        var scoreID = scoreCall.get('id');
//    //        //console.log("Score ID is " + scoreID);
//    //        self.store.find('score', scoreID).then(function(scoreRecord){
                
//    //            //console.log("Score itself is " + scoreRecord.get('score'));
//    //            //console.log(typeof scoreRecord.get('objective.id'));
//    //            var thisObjID = Number(scoreRecord.get('objective.id'));
//    //            //console.log(typeof thisObjID + thisObjID);
//    //            if (thisObjID === 1) {
//    //                score = scoreRecord.get('score');
//    //                console.log(name + score);
//    //            }
//    //            return score;
//    //        });
//    //    }).then(function(whatever){console.log(whatever)});

//    //    //console.log(check);
        
//    //    return score;
//    //}.property('model.@each.scores'),
 
////computed

//    snapBlue:   function(){
//                    if(this.get('score')===0){return true;} else {return false;}
//                }.property('score'),
//    snapRed:    function(){
//                    if(this.get('score')===1){return true;} else {return false;}
//                }.property('score'),
//    snapAmber:  function(){
//                    if(this.get('score')===2){return true;} else {return false;}
//                }.property('score'),
//    snapGreen:  function(){
//                    if(this.get('score')===3){return true;} else {return false;}
//                }.property('score'),


////actions
//actions: {

//    toggleOnField:  function(student){
//                        student.toggleProperty('onField');
//                        student.save();
//                    },

//    toggleScore:    function(student){
//                        if(student.get('score')<3){
//                            student.incrementProperty('score');
//                            student.save();
//                        } else {
//                            student.set('score', 1);
//                            student.save();
//                        }
//        },
//    }

//});
