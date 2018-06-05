import Ember from 'ember';

export default Ember.Component.extend({

    classNames: [""],
    

    // If there is an onOk action, or okText set, then allow the OK button
    okButton: Ember.computed(function(){
        if(this.get('submit')){
            return true
        } else if(this.get('okButtonText')){
            return true
        } else {
            return false
        }
    }),
    okText: "Okay",

    actions: {
        cancel(){
            this.get('cancel')();
        },

        submit(){
            this.get('submit')();
        },

    },

});
