import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({

daysArray: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

// Create a

dates: Ember.computed(function(){
    // Returns array of moment dates between given start and end Dates
    // TODO - refactor this into a seperate function
    // Create the date object prototype/class
    const DateObj = Ember.Object.extend({
    });

    // Determine start and end dates
    // Default Sep 1 to Aug 31, but...
    // TODO - add functionality to choose academic year start date
    let startDate = function(){
        let start;
        let now = moment().clone().month();
        // If now-month is >= september, then set Sep 1 this year as start date
        if (now >= 8) {
            start = moment().clone().month(8).date(1);
        } else {
            start = moment().clone().subtract(1, "y").month(8).date(1);
        }
        // Else if now-month is < september, then set Sep 1 previous year as start date
        return start;
    };
    // let endDate = Start + 1 year - 1 day
    let endDate = startDate().clone().add(1, "y").subtract(1, "d");

    // Create array for loading each date
    let dateArray = new Array();
    let day = startDate().clone();
    while (day <= endDate) {
        // let newDate = {date:dt};
        let dateObj = new DateObj({
            date: day
        });
        dateArray.push(dateObj);
        day = day.clone().add(1, 'd');
    };

    // Log, then return the dates
    return dateArray;
    // Push objects into dates array

}),

months: Ember.computed('dates', function(){
    // Returns the dates filtered by each month, in an array for each month.
    // Start 8 for September start of year
    let startMonth = 8;
    let monthsArray = [];
    let dates = this.get('dates');

    let MonthObj = Ember.Object.extend({});

    for (var i = 1; i < 13; i++) {
        // Return the matching dates for the month
        let monthDates = dates.filter((date)=>{
            let month = date.get('date').month();
            if (month === startMonth) {return date};
        });
        // Create a new month object
        let monthObj = MonthObj.create({
            month: startMonth + 1,
            dates: monthDates
        });
        startMonth = (startMonth + 1)%12
        monthsArray.pushObject(monthObj);
    };
    return monthsArray;



}),


// Dates
// {
//     month: "September",
//     days: [
//         {
//             moment: "34843024",
//             month: "September",
//             day: 1
//         },
//         {
//             moment: "34843024",
//             month: "September",
//             day: 2
//         },
//         {
//             moment: "34843024",
//             month: "September",
//             day: 3
//         }
//     ]
// },
// {
//     month: "October",
//     days: [
//         {
//             moment: "34843024",
//             month: "October",
//             day: 1
//         },
//         {
//             moment: "34843024",
//             month: "October",
//             day: 1
//         },
//         {
//             moment: "34843024",
//             month: "October",
//             day: 1
//         }
//     ]
// }


});
