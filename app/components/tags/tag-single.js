import Ember from 'ember';

export default Ember.Component.extend({

    tagName: "span",

    classNames: [ "tag-single" ],
    classNameBindings: [ "applied" ],

    actions: {

        // remove this tag from the set of tags
        removeTag(){
            this.set('applied', false);
        },
        // Add this tag to the set of associated tags
        addTag(){
            this.set('applied', true);
        },

    }

});
