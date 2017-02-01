import Ember from 'ember';

export default Ember.Component.extend({

classNames: [ 'invisible-overlay', 'animated', 'fadeIn'],

click(){
    this.get('onclickaction')();
},

});
