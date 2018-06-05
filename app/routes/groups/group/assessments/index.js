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
                notes: "String in here"
            })
            group.get('assessmentRecords').pushObject(newAssessmentGroupRecord);
            alert("Assessment set");
        },
    }

});
