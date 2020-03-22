import Ember from 'ember';

export default Ember.Controller.extend({

    groupName: "",

    actions: {

        createGroup(){
            let _this = this;
            var group = this.store.createRecord('group', {
                name: this.get('groupName')
            });
            //TODO, full page, clear alert
            alert("New group created");
            group.save().then(function(group){
                _this.set('groupName', "");
                _this.transitionToRoute('groups.group', group);
            });
        },

        cancel(){
            this.transitionToRoute('groups');
        },

    }

});
