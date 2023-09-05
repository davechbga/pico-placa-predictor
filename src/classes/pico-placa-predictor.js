// Class to predict if a car with a license plate is authorized to circulate in a date and hour
class PicoPlacaPredictor {
  // define the constructor
  constructor(licensePlate, restrictions) {
    this._licensePlate = licensePlate;
    this._rules = restrictions;
  }
  // define the methods of the class
  isAuthorizedToCirculate(date, hour) {
    const dayNumber = date.getDay() + 1;
    console.log("dayNumber", dayNumber);
    let resultRule = this._rules.find(
      (restriction) => restriction.day === dayNumber
    );
    if (!resultRule) {
      return true;
    }
    let resultPlateDigit = resultRule.lastDigitsLicensePlate.find(
      (digit) => digit === this._licensePlate.lastDigit
    );
    if (!resultPlateDigit && resultPlateDigit !== 0) {
      return true;
    }
    let resultHourInterval = resultRule.hours.find((hourInterval) =>
      this.isHourBetweenPeriods(
        hourInterval.initialHour,
        hourInterval.finalHour,
        hour
      )
    );
    if (!resultHourInterval) {
      return true;
    }
    return false;
  }
  isHourBetweenPeriods(initialHour, finalHour, userHour) {
    const dateReference = "01/01/2007 ";
    const initialDateReference = new Date(dateReference + initialHour);
    const finalDateReference = new Date(dateReference + finalHour);
    const userDateReference = new Date(dateReference + userHour);
    return (
      userDateReference <= finalDateReference &&
      userDateReference >= initialDateReference
    );
  }
  addRestrictionRule(rule) {
    this._rules.push(rule);
  }
}
export default PicoPlacaPredictor;
