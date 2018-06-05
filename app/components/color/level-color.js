import Ember from 'ember';

export default Ember.Component.extend({

classNameBindings: [ 'colorClass' ],

colorClass: Ember.computed( 'level', function(){
    let level = this.get('level');
    return "color-level-" + level;
}),

});
