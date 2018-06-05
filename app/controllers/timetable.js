import Ember from 'ember';

export default Ember.Controller.extend({

    adjective: "fantastic",

    events: Ember.A([{
         title: 'Event 1',
         start: '2018-03-03T07:08:08',
         end: '2018-03-03T09:08:08'
     }]),


    actions: {

        nextMonth(){

        },

        clicked(event, jsEvent, view){
            Ember.$('.full-calendar').fullCalendar({
                option: {'weekends': false}
            });
        }
    }

});
