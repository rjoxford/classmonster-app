import Ember from 'ember';

export default Ember.Component.extend({

    willDestroyElement(){
        //
        // function wait(ms){
        //    var start = new Date().getTime();
        //    var end = start;
        //    while(end < start + ms) {
        //      end = new Date().getTime();
        //   }
        // }
        Ember.$(".sidebar-right").addClass('animated slideOutRight');
        console.log('Destruction called');
    },

    actions: {

        // Calls the applications toggle sidebar action. (isLeftBar/isRightBar)
        onclickaction(){
            this.get('onclickaction')();
        },

    }

});
