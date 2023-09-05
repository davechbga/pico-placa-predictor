import weekDay from "./days.js";
import validateHour from "./time.js";

// define the intervals of time
const intervals = {
    moorning: {
        initialHour: validateHour("07:00"),
        finalHour: validateHour("09:30")
    },
    afternoon: {
        initialHour: validateHour("16:00"),
        finalHour: validateHour("19:30")
    }
};

// define the last digits of the license plate
const digitsPlates = {
    monday: [1, 2],
    tuesday: [3, 4],
    wednesday: [5, 6],
    thursday: [7, 8],
    friday: [0, 9]
};

// define the rules of pico y placa
let picoYPlacaRules = [
    {
        day: weekDay.MONDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.monday
    },
    {
        day: weekDay.TUESDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.tuesday
    },
    {
        day: weekDay.WEDNESDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.wednesday
    },
    {
        day: weekDay.THURSDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.thursday
    },
    {
        day: weekDay.FRIDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.friday
    },
];
export default picoYPlacaRules;
