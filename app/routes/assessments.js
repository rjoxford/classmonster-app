import Ember from 'ember';

export default Ember.Route.extend({

model(){
    return this.get('store').findAll('assessment');
},

actions: {

    createAssessment(){
        console.log('Assessment created in the "assessment" route');
    }

}

});
