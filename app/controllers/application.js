import Ember from 'ember';

export default Ember.Controller.extend({

    //Ember simple auth session
    //session: Ember.inject.service(),


    //TODO turn into computed property
    //activeClass: Ember.computed.alias('model.firstObject'),
    allClasses: function(){
        return this.store.findAll('group');
    }.property(),

    isLeftBar: false,
    isRightBar: false,

    /////  Active class studying an active unit now depracated, UPDATE - making a comeback! For the benefit of quick access  buttons in sidebars
    //Having an active class now depracated
    activeClass: Ember.computed( function(){
       var self = this;
       var allClasses = this.store.findAll('group');
       return allClasses.then(function(classes){
           var first = classes.get('firstObject');
           self.set('activeClass', first);
           return first;
       });
   }),


    //allUnits: function(){
    //    return this.store.findAll('unit');
    //}.property(),

    //activeUnit: function(){
    //    var self = this;
    //    var allUnits = this.store.findAll('unit');
    //    return allUnits.then(function(units){
    //        var first = units.get('firstObject');
    //        self.set('activeUnit', first);
    //        return first;
    //    });
    //}.property(),

    ////ClassSelecting shows pop up class selection menu
    //classSelecting: false,
    ////UnitSelecting shows pop up unit selection menu
    //unitSelecting: false,
    ////ObjectiveSelecting shows pop up unit selection menu
    ////objectiveSelecting: false,




    actions: {

        //Ember simp auth session
        //invalidateSession() {
        //    this.get('session').invalidate();
        //},

        togIsLeftBar(){
            this.toggleProperty('isLeftBar');
        },
        togIsRightBar(){
            this.toggleProperty('isRightBar');
        },

//togClassSelecting: function(){
//    this.toggleProperty('classSelecting');
//},

//togUnitSelecting: function(){
//    this.toggleProperty('unitSelecting');
//},

//selectClass: function(group){
//    //set activeClass
//    this.set('activeClass', group);
//    //clear the classSelector
//    this.toggleProperty('classSelecting');
//    //Reload the current route.
//    var currentRoute = this.get('currentRouteName');
//    this.transitionToRoute('application');
//    this.transitionToRoute(currentRoute);
//},

//selectUnit: function(unit){
//    //set the active unit
//    this.set('activeUnit', unit);
//    //clear the unit selector
//    this.toggleProperty('unitSelecting');
//    //Reload route
//    var currentRoute = this.get('currentRouteName');
//    this.transitionToRoute('application');
//    this.transitionToRoute(currentRoute);
//},



//viewClass: function(group){
//    //set activeClass
//    this.set('activeClass', group);
//    //clear the classSelector
//    this.toggleProperty('classSelecting');
//    //transition to class' page
//    this.transitionToRoute('groups.group', group);
//}


}
});
