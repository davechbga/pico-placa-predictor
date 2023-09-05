import React, { useState } from "react";
import swal from "sweetalert";
import LicensePlate from "../classes/license-plate";
import PicoPlacaPredictor from "../classes/pico-placa-predictor";
import picoYPlacaRules from "../resources/rules";

function Main() {
  const [licensePlate, setLicensePlate] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const licencePlateObj = new LicensePlate(licensePlate);
    const predictor = new PicoPlacaPredictor(licencePlateObj, picoYPlacaRules);
    const isAuthorized = predictor.isAuthorizedToCirculate(
      new Date(date),
      hour
    );

    if (isAuthorized) {
      swal({
        title: "Great!",
        text: `You car with ${licensePlate} license plate can be on the road.`,
        icon: "success",
        button: "Ok",
      });
    } else {
      swal({
        title: "Oh, sorry!",
        text: `You car with ${licensePlate} license plate can not be on the road.`,
        icon: "error",
        button: "Close",
      });
    }
  };

  return (
    <main className="container">
      <div className="row justify-content-center">
        <form className="col-md-6 col-lg-4" onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="userLicensePlate">Enter your license plate:</label>
            <input
              className="form-control"
              type="text"
              pattern="^[A-Z]{3}-[0-9]{3,4}$"
              placeholder="ABC-1234"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="userDate">Select a date:</label>
            <input
              className="form-control"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="userHour">Enter an hour:</label>
            <input
              className="form-control"
              type="time"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary mt-4" type="submit">
            Predict
          </button>
        </form>
      </div>
    </main>
  );
}

export default Main;
