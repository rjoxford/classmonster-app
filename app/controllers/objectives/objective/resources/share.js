import Ember from 'ember';

export default Ember.Controller.extend({


// Create a Resource object to contain the resources properties
resource: Ember.computed(function(){
    const resourceClass = Ember.Object.extend();
    return resourceClass.create();
}),

// Sets handlebars booleans dependent on the resourceType
resourceObserver: Ember.observer('resourceType', function(){
    this.resourceReset();
    var resourceType = this.get('resourceType');
    if (resourceType==="web") {
        this.set('resourceWeb', true);
    }
    if (resourceType==="document") {
        this.set('resourceDocument', true);
    }
    if (resourceType==="video") {
        this.set('resourceVideo', true);
    }
}),
resourceType: "",
resourceReset: function(){
    this.set('resourceWeb', false);
    this.set('resourceDocument', false);
    this.set('resourceVideo', false);
},
resourceWeb: false,
resourceDocument: false,
resourceVideo: false,




// Credits - who authored the resource?
isAuthor: false,



//Tags
tagString: "",
tagArray: Ember.computed('tagString', function(){
    var tagString = this.get('tagString');
    if (tagString.includes(" ")){
        return tagString.split(" ");
    }
}),



// The array of tags suggested for the resource
// TODO - Make this database-driven
tagsArray: [
    {   tagId: 1,
        tagName: "Fun!",
        tagApplied: false,
    },
    {   tagId: 2,
        tagName: "Group Activity!",
        tagApplied: false,
    },
    {   tagId: 3,
        tagName: "Video",
        tagApplied: false,
    },
    {   tagId: 4,
        tagName: "Game",
        tagApplied: true,
    },
    {   tagId: 5,
        tagName: "Worksheet",
        tagApplied: true,
    },
],
// suggestedTags: [],
// appliedTags: [],

actions: {

    setResourceType(type){
        this.set('resourceType', type)
    },

    // Credits/ Authroing
    // If did author the resource
    setIsAuthor(boolean){
        this.set('isAuthor', boolean);
    },

    // Save new resource
    saveResource(){
        var objective = this.get('model');
        console.log(objective.get('id'));
        var newResource = this.store.createRecord('resource', {
            title: this.get('title'),
            description: this.get('description'),
            url: this.get('url'),
            objective: objective,
            rating: 5
        });
        var _this = this;
        newResource.save().then(function(){
            _this.transitionToRoute('objectives.objective.resources');
        });
    },
}


});
