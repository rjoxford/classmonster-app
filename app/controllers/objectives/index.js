import Ember from 'ember';

export default Ember.Controller.extend({

actions: {

    selectObjective(objective){
        this.transitionToRoute('objectives.objective', objective);
    }

}

});
