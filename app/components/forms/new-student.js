import Ember from 'ember';

export default Ember.Component.extend({


actions: {

    //TODO write and inject a service containing methods for verification
    save(){
        this.get('save')();
    },

    cancel(){
        this.get('cancel')();
    },


    verifiy(){
        //To be called instead as a service. Call function and decide criteria.
    },
}

});
