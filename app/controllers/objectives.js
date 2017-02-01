import Ember from 'ember';

export default Ember.Controller.extend({
    
    isAddingNew: false,
    isEditing: false,

    objectivesAll: function(){
        return this.get('model');
    }.property('model'),
    objectivesFiltered: function(){
        return this.get('objectivesAll');
    }.property('objectivesAll'),

    filterCriteriaBranches: function(){
        return [];
    }.property(),
    filterCriteriaLevels: function(){
        return [];
    }.property(),


    actions: {
        newObjective : function(){
            var self = this;
            var objName = this.get('objectiveName');
            var objBranch = this.get('objectiveBranch');
            var newObj = this.store.createRecord('objective', {
                name: objName,
                branch: objBranch
            });
            newObj.save().then(function(){
                self.set('objectiveName', "");
                self.set('objectiveBranch', "");
                self.set('isAddingNew', false);
            });
        },

        showAddNewForm: function(){
            this.set('isAddingNew', true);
        },

        editObjective: function(){
            this.set('isEditing', true);
        },

        updateObjective: function(objective){
            objective.save();
            this.set('isEditing', false);
        },


        filterObjectives: function(filterType, filter){
            var allObjectives = this.get('objectivesAll');
            var filterCriteriaBranches = this.get('filterCriteriaBranches');

            //Update the filter properties
            if (filterType==="Branch"){
            //Check if filter is already part of filterCriteria
            //If not, then add filter to criteria
                if (!(filterCriteriaBranches.contains(filter))){
                    filterCriteriaBranches.pushObject(filter);
                }else{
                    //If the filter already, then remove
                    filterCriteriaBranches.removeObject(filter);
                }
            }



            //Filter all objectives by the given filters
            //Branches
            var filteredObjectives = [];
            if (filterCriteriaBranches.length >0){
                filterCriteriaBranches.forEach(function(item){
                    var newfilteredObjectives = allObjectives.filterBy('branch', item);
                    filteredObjectives = filteredObjectives.addObjects(newfilteredObjectives);
                });
            } else {
                filteredObjectives = allObjectives;
            }


            //Set the filters as properties on controller for future
            this.set('filterCriteriaBranches', filterCriteriaBranches);

            //Sort the filtered objectives

            //And ultimately set the filtered objectives
            this.set('objectivesFiltered', filteredObjectives);
        }

    }

});
