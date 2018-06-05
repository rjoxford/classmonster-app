import Ember from 'ember';

export default Ember.Component.extend({

timesArray: ["08-00", "09-00", "10-00","11-00","12-00","13-00","14-00", "15-00", "16-00"],
daysArray: ["mon", "tue", "wed", "thu", "fri"],

actions: {

    addSession(){
        alert("Adding Session... \n in component.");
    }

}

});
