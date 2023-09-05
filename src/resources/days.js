// Proupose: Enum for days of the week.
var weekDay;
(function (weekDay) {
    weekDay[weekDay["MONDAY"] = 1] = "MONDAY";
    weekDay[weekDay["TUESDAY"] = 2] = "TUESDAY";
    weekDay[weekDay["WEDNESDAY"] = 3] = "WEDNESDAY";
    weekDay[weekDay["THURSDAY"] = 4] = "THURSDAY";
    weekDay[weekDay["FRIDAY"] = 5] = "FRIDAY";
    weekDay[weekDay["SATURDAY"] = 6] = "SATURDAY";
    weekDay[weekDay["SUNDAY"] = 7] = "SUNDAY";
})(weekDay || (weekDay = {}));
export default weekDay;
