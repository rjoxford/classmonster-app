import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        save(title, description){
            let _this = this;
            let assessment = this.get('store').createRecord('assessment', {
                title: title,
                description: description
            });
            assessment.save().then(function(newRecord){
                alert(title + "\nAssessment saved");
                _this.transitionToRoute('assessments.assessment.edit', newRecord);
            });
        },

        delete(assessment){

        }

    }

});
