import Ember from 'ember';

export default Ember.Component.extend({

    //Properties
    snapBlue: true,
    snapRed: false,
    snapAmber: false,
    snapGreen: false,
    snapObserver: Ember.observer('score', function(){
        var score = this.get('score');
        this.setProperties({ snapBlue: false, snapRed:false, snapAmber: false, snapGreen: false });
        if (score===0){
            this.set('snapBlue', true);
        } else if (score===1){
            this.set('snapRed', true);
        } else if (score===2){
            this.set('snapAmber', true);
        } else if (score===3){
            this.set('snapGreen', true);
        }
    }),

});
