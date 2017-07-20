import Ember from 'ember';


export default Ember.Component.extend({

    // Find all objectives
    store: Ember.inject.service(),

    // Default Properties
    // Should the objective be a clickable link-to? (default false)
    hasLinks: false,
    hasDraggables: false,

    // Return unfiltered set of all objectives
    allObjectives: Ember.computed( function(){
        return this.get('store').findAll('objective');
        // return this.get('store').query('objective', { branch: "Algebra" });
    }),

    filteredObjectives: Ember.computed( function(){
        return this.get('allObjectives');
    }),

    // Return classications areas
    areas: Ember.computed( 'filteredObjectives', function(){
        let filteredObjectives = this.get('filteredObjectives');
        return filteredObjectives.mapBy('area').uniq();
    }),
    branches: Ember.computed( 'filteredObjectives', function(){
        let filteredObjectives = this.get('filteredObjectives');
        return filteredObjectives.mapBy('branch').uniq();
    }),
    topics: Ember.computed( 'filteredObjectives', function(){
        let filteredObjectives = this.get('filteredObjectives');
        return filteredObjectives.mapBy('topic').uniq();
    } ),

    // Criteria for filters
    //filterCriteriaArea: "",
    // filterCriteriaBranch: "",
    // filterCriteriaTopic: "",





    // Toggling views for the different objective filter controls
    viewFilterbySearch: true,
    viewFilterbyGrade: false,
    viewFilterbyClassification: false,

    actions: {
        searchObjectives(){
            var searchCriteria = this.get('searchCriteria');
            var filteredObjectives = this.get('allObjectives').findBy('area', searchCriteria);
            this.set('filteredObjectives', filteredObjectives);
        },

        // View Filter ass. actions
        resetAllFilterViews(){
            this.setProperties({'viewFilterbySearch': false, 'viewFilterbyGrade': false, 'viewFilterbyClassification': false });
        },
        togViewFilterbySearch(){
            this.send('resetAllFilterViews');
            this.set('viewFilterbySearch', true);
        },
        togViewFilterbyGrade(){
            this.send('resetAllFilterViews');
            this.set('viewFilterbyGrade', true);
        },
        togViewFilterbyClassification(){
            this.send('resetAllFilterViews');
            this.set('viewFilterbyClassification', true);
        },

        // For filtering by classification
        filterObjectives(){
            // Load the filteredObjectives
            var filteredObjectives = this.get('allObjectives');

            // If area is set, filter first by area
            let filterCriteriaArea = this.get('filterCriteriaArea');
            if(filterCriteriaArea){
                filteredObjectives = filteredObjectives.filterBy('area', filterCriteriaArea);
            };

            let filterCriteriaBranch = this.get('filterCriteriaBranch');
            if(filterCriteriaBranch){
                filteredObjectives = filteredObjectives.filterBy('branch', filterCriteriaBranch);
            };
            let filterCriteriaTopic = this.get('filterCriteriaTopic');
            if(filterCriteriaTopic){
                filteredObjectives = filteredObjectives.filterBy('topic', filterCriteriaTopic);
            };
            // Set the filteredObjectives as newly filtered set
            this.set('filteredObjectives', filteredObjectives);
        },

        // Actions to set the filter criteria
        setFilterArea(area){
            this.set('filterCriteriaArea', area);
            this.send('filterObjectives');
        },
        setFilterBranch(branch){
            this.set('filterCriteriaBranch', branch);
            this.send('filterObjectives');
        },
        setFilterTopic(topic){
            this.set('filterCriteriaTopic', topic);
            this.send('filterObjectives');
        },
        setFilterLevel(level){
            this.set('filterCriteriaLevel', level);
            this.send('filterObjectives');
        },
        resetFilters(){
            this.setProperties({'filterCriteriaArea': "", 'filterCriteriaBranch': "", 'filterCriteriaTopic': "" });
            this.send('filterObjectives');
        },


    }
});
