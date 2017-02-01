import Ember from 'ember';

export default Ember.Component.extend({


    classNames: [""],

    actions: {
        cancel(){
            this.get('cancel')();
        },

        submit(){
            this.get('submit')();
        },

    },

});
