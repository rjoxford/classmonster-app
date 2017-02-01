import Ember from 'ember';

export default Ember.Controller.extend({
    
    actions: {
        
        createNewUnit: function(){
            console.log('Creating a new unit function invoked!');
        },

        testCall: function(){
            console.log('Will call units controller!');
        }
    }
});
