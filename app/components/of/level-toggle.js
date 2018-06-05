// TODO - now in parent component. unable to pass object back to parent component
// import Ember from 'ember';
//
// export default Ember.Component.extend({
//
// //If does not exist, set levelsArray on init
// didReceiveAttrs(){
//     let levelsArray = this.get('levelsArray');
//     console.log("Length = ");
//     if (levelsArray.length == 0){
//         // Set the levels Array
//         const LevelObj = Ember.Object.extend({
//             selected: true
//         });
//         let allLevels = [];
//
//         for (var i = 1; i < 11; i++) {
//             let newLevel = LevelObj.create({
//                 level: i
//             });
//             allLevels.pushObject(newLevel);
//         }
//
//         this.set('levelsArray', allLevels);
//     }
//     else {
//         alert("Levels array exists!");
//     }
// },
//
// actions: {
//
//     toggleLevel(item){
//         item.toggleProperty('selected');
//         alert(item.level + " Selected :" + item.selected);
//     }
//
// }
//
// });
