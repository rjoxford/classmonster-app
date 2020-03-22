import Ember from 'ember';

export default Ember.Controller.extend({

groups: Ember.computed(function(){
    return this.store.findAll('group');
}),

actions: {

    cancelEditSession(){
        this.transitionToRoute('planner.timetable');
    },

    saveSession(){
        this.get('model').save();
        alert("Session Updated");
        this.transitionToRoute('planner.timetable');
    },

    deleteSession(){
        let _this = this;
        this.get('model').destroyRecord().then(function(){
            _this.transitionToRoute('planner.timetable');
        })
    }

}

});
