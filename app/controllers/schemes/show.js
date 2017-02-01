import Ember from 'ember';

export default Ember.Controller.extend({

    unitName: "",

    actions: {

        save: function(){
            alert("Seven");
            //var self = this;
            //var name = this.get('unitName');
            //var group = this.store.createRecord('unit', {
            //    name: name
            //});
            //group.save().then(function(){
            //    self.set('unitName', "");
            //    self.transitionTo('schemes');
            //});
        }

    }

});
