import Ember from 'ember';

export default Ember.Component.extend({
    
    //                                        Tag, Classes
    //For adding dynamic content within row of a table. Flexibility requires use of component
    tagName: 'tr',


    //                                        Properties
    //Whether the hidden content component is visible or not
    visible: false,
    destinationId: "",

    //                                          On creation
    didInsertElement: function(){
        this.set('destinationId', this.elementId);
    },

    //                                        Actions
    actions: {

        togVisible (){
            this.toggleProperty('visible');
            console.log(this.elementId);
        }
    }
});
