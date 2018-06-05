import Ember from 'ember';

export default Ember.Controller.extend({

    ////////////////////////////            Authenitication         /////////////////////////////
    //Ember simple auth session
    // session: Ember.inject.service(),
    // currentUser: Ember.inject.service(),
    // user: Ember.computed.alias('currentUser.user'),

    //Set a currentUser


    //TODO turn into computed property
    //activeClass: Ember.computed.alias('model.firstObject'),
    userGroups: function(){
        let user = this.get('user');
        return this.store.query('group', {'user':user});
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
            console.log(this.get('session'));
        },


}
});
