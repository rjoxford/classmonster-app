function convertArrayOfObjectsToCSV(args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }


import Ember from 'ember';

export default Ember.Controller.extend({

    isAdding:       false,
    isDeleting:     false,

    // testArray here is just for testing print code to download array as csv file. TODO - use this approach for downloading class lists, SoWs etc.
    testArray: [{"forename": "Robin", "surname": "Oxford"},
        {"forename": "Robin", "surname": "Oxford"},
        {"forename": "Jack", "surname": "Jones"},
        {"forename": "John", "surname": "Bishop"},
        {"forename": "Lenny", "surname": "Henry"}
    ],


    // The array of unassigned objectives, to be filtered, then dragged into units)
    objectives: Ember.computed(function(){
        return this.store.findAll('objective');
    }),

    actions: {

        //Hides or unhides the addingUnit form
        togIsAdding(){
                this.toggleProperty('isAdding');
        },

        printArray(){
            let testArray = this.get('testArray');
            console.log(testArray);

            var data, filename, link;
            var csv = convertArrayOfObjectsToCSV({
                data: testArray
            });
            if (csv == null) return;

            filename = 'export.csv';

            if (!csv.match(/^data:text\/csv/i)) {
                csv = 'data:text/csv;charset=utf-8,' + csv;
            }
            data = encodeURI(csv);

            link = document.createElement('a');
            link.setAttribute('href', data);
            link.setAttribute('download', filename);
            link.click();
        },

        // Adds a new unit to the current model scheme
        addNewUnit(model) {
            //Saves the model to the DB
            var self = this;
            var newUnitName = this.get('newUnitName');
            var newUnit = this.store.createRecord('unit', {
                name: newUnitName,
                scheme: model
            });
            newUnit.save().then(function(){
                self.set('newUnitName', "");
                self.transitionTo('schemes.units.show', 'newUnit.id')
            });
        },

        cancelAddUnit(){
            //Cancel the add new unit
            this.set('newUnitName', "");
            this.set('isAdding', false);
        },

        togIsDeleting(){
            //Hides or unhides the deleting unit controls
            this.toggleProperty('isDeleting');
        },

        deleteUnit(unit) {
            var self = this;
            unit.destroyRecord();
        },

        dropObjective(data, unit){
            // On drop
            // Gather required details
                // Gain the objective model id
                var objectiveId = JSON.parse(data).objectiveId;
                // The objectives starting point - passed into objective component via hbs
                var originType = JSON.parse(data).originType;
                var origin = JSON.parse(data).origin;
                var originId = JSON.parse(data).originId;
                console.log(data);
                // console.log("Origin is below:");
                // console.log(origin);
            // Add the objective to new location
                // If the target destination is a unit
                var objectiveRecord = this.get('store').peekRecord('objective', objectiveId);
                var targetUnitRecord = this.get('store').peekRecord('unit', unit.id);
                targetUnitRecord.get('objectives').pushObject(objectiveRecord);
                targetUnitRecord.save();
                // If target destination is the objectives array

            // Remove the objective where it had previously been
            // If the origin was a unit
            if (originType === "unit") {
                // Remove from that unit
                var originUnitRecord = this.get('store').peekRecord('unit', originId);
                originUnitRecord.get('objectives').removeObject(objectiveRecord);
                originUnitRecord.save();
            }
            // If the objective had already been assigned to a unit



        }

}



});

//
// dropObjective(data, unit){
//     console.log('Objective and Unit received by the controller');
//     console.log("Objective is below:");
//     var obj = JSON.parse(data);
//     var objective = obj.objective;
//     console.log(obj.objectiveId);
//     console.log("Unit is below");
//     console.log("unit Id is: " + unit.id);
//     console.log(unit.get('name'));
//     // On drop
//
//     // Gain the objective model id
//     var myObjective = this.get('store').peekRecord('objective', obj.objectiveId);
//     let myUnit = this.get('store').peekRecord('unit', unit.id);
//     myUnit.get('objectives').pushObject(myObjective);
//     myUnit.save();
//
//
//     // Add the objective to the unit.objectives
//
//     // Remove the objective from the array of all objectives
//
// }
