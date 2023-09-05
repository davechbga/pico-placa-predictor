import Validators from "../classes/validators";

// validate the format of hour
const validateHour = (hour) => {
    if (!Validators.validateTime(hour)) {
        throw new Error('Format invalid of hour');
    }
    return hour;
};
export default validateHour;
