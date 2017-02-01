import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement: function(){
        
        for (var i = 0; i<100; i++){
            var gridunit = "<div id='gridunit" + i + "' class='gridunit'>" + i + "</div>";
            Ember.$("#gridarea").append(gridunit);
        }
        
        
    }

});
