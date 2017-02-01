import Ember from 'ember';

export default Ember.Component.extend({

    // classNames: [ "sidebar", "sidebar-left" ],

    actions: {

        // Calls the applications toggle sidebar action. (isLeftBar/isRightBar)
        onclickaction(){
            this.get('onclickaction')();
        },

    }
});
