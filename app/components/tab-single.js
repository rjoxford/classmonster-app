import Ember from 'ember';

export default Ember.Component.extend({

classNames:         [ 'tab-single' ],
classNameBindings:  [ 'selected' ],

selected: false,

//Deselector observer is used to deselect a tab single from tab-set.
//deselector property shared between tab-singles, and is toggled on clicking a tab
//TODO improve strategy for deselecting a tab
deselectorObserver: Ember.observer('deselector', function(){
    this.set('selected', false);
}),

click(){
    this.toggleProperty('deselector');
    //If an action is set, trigger the action -eg for routeless tabs
    if(this.get('action')){
        this.get('action')();
    };
    this.set('selected', true);

    //If a link is specified, then transition to that link.
    //TODO add an argument for this.
    if(this.get('link')){
        this.get('router').transitionToRoute(this.get('link'));
    }

},




});
