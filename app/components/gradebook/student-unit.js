import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'tr',
    store: Ember.inject.service(),

    didReceiveAttrs(){
        let unit = this.get('unit');
        let objectives = this.get('objectives')

        // Need to return the student's score for each objective in the unit
        //Map to a new object/hash with objective and score, retaining ember models for possible in situ score updating
        
    },

    objectives: null,

    expanded: false,

    actions: {

        expandUnit(){
            this.toggleProperty('expanded');
        },

    }

});
