import Ember from 'ember';

export default Ember.Component.extend({

viewPreview: false,

actions: {

    togViewPreview(){
        this.toggleProperty('viewPreview');
    },
    confirm(){
        console.log('confirmed in edit-component. Call Route action from here');
    },
    saveQuestion(){
        this.get('saveQuestion')();
    },
    cancelPreview(){
        this.set('viewPreview', false);
    },
    cancel(){
        this.get('cancel')();
    }



}

});
