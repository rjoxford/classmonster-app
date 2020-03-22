import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        return Ember.RSVP.hash({
            group: this.modelFor('groups.group'),
            assessments: this.get('store').findAll('assessment')
        })
    },

    actions: {

        setAssessment(assessment){
            let group = this.modelFor('groups.group');
            let newAssessmentGroupRecord =  this.get('store').createRecord('assessment-group-record', {
                assessment: assessment,
                notes: "String in here",
                group: group
            });
            // group.get('assessmentRecords').pushObject(newAssessmentGroupRecord);
            let _this = this;
            newAssessmentGroupRecord.save().then(function(){
                alert("Assessment set");
                _this.transitionTo('groups.group.assessments');
            });
        },
    }

});
