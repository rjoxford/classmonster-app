import Ember from 'ember';

export default Ember.Component.extend({

    //Properties

    snapRed: true,
    snapAmber: false,
    snapGreen: false,
    snapObserver: function(){
        var score = this.get('score');
        this.setProperties({ snapRed:false, snapAmber: false, snapGreen: false });
        if (score===1){
            this.set('snapRed', true);
        } else if (score===2){
            this.set('snapAmber', true);
        } else if (score===3){
            this.set('snapGreen', true);
        }
    }.observes('score'),


    //Actions
    actions: {
        toggleScore(){
            var score = this.get('score');
            if (score<1){
                this.set('score', 1);
            } else if (score===1){
                this.set('score', 2);
            } else if (score===2){
                this.set('score', 3);
            } else if (score===3){
                this.set('score', 1);
            } else {
                this.set('score', 1);
            };
            this.get('save')();
            // snapscore.save();
        },


    }
});
