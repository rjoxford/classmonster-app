import Ember from 'ember';
import pdfMake from 'npm:pdfmake';

export default Ember.Component.extend({

    didInsertElement: function(){
        var docDefinition = { content: 'This is an sample PDF printed with pdfMake' };
        pdfMake.createPdf(docDefinition).open();
    },

});
