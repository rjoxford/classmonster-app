import Ember from 'ember';

export default Ember.Controller.extend({

    groupName: "",

    actions: {

        save: function(){
            var _this = this;
            var name = this.get('groupName');
            var group = this.store.createRecord('group', {
                name: name
            });
            alert("Save function called!");
            group.save().then(function(group){
                _this.set('groupName', "");
                _this.transitionToRoute('groups.group.students', group);
            });
        },

        cancel(){
            this.transitionToRoute('groups');
        },

    }

});
