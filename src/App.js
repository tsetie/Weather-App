import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import "./components/LocationBar";
import LocationBar from "./components/LocationBar";
import Box from "@mui/material/Box";
import TodayInfo from "./components/TodayInfo";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";
import TodayDetails from "./components/TodayDetails";
import Stack from "@mui/material/Stack";

function App() {
  var dayColor = "#FBAB7E";
  var dayColor2 = "#F7CE68";
  var nightColor1 = "#243949";
  var nightColor2 = "#09203f";
  var backgroundColor = null;
  var backgroundColor2 = null;

  const [zipcode, setZipcode] = useState("01852");
  const handleZipcode = (e) => {
    var newZip = e.target.value;
    if (newZip.length === 5) {
      setZipcode(e.target.value);
    }
  };

  const [showAlert, setShowAlert] = useState(false);

  // Changing units b/w F & C
  const [units, setUnits] = useState("imperial");
  const handleCelcius = (e) => {
    setUnits("metric");
  };
  const handleFahrenheit = (e) => {
    setUnits("imperial");
  };

  // Getting users location with geolocation
  const [coords, setCoords] = useState(null);
  const handleGettingUserLocation = (e) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setZipcode(null); // set zipcode null so it wont go into the zipcode fetch when useEffect is triggered
        setCoords(position.coords);
      });
    } else {
      console.log("Unable to get geolocation.");
    }
  };
  // Changing background based on  daytime/nighttime (removed for now)
  // if (Date.now().getHours >= 5 && Date.now().getHours <= 17) {
  //   backgroundColor = dayColor;
  //   backgroundColor2 = dayColor2;
  // } else {
  backgroundColor = nightColor1;
  backgroundColor2 = nightColor2;
  // }

  return (
    <Stack
      sx={{
        p: "1em",
        background: `linear-gradient(to right,${backgroundColor}, ${backgroundColor2})`,
      }}
      height="100vh"
    >
      <LocationBar
        handleZipcode={handleZipcode}
        handleCelcius={handleCelcius}
        handleFahrenheit={handleFahrenheit}
        handleGettingUserLocation={handleGettingUserLocation}
        showAlert={showAlert}
      />
      <Stack direction="row" justifyContent="space-around">
        <Stack>
          <TodayInfo zipcode={zipcode} units={units} coords={coords} />

          <HourlyForecast
            zipcode={zipcode}
            units={units}
            coords={coords}
            setShowAlert={setShowAlert}
          />
          <TodayDetails
            zipcode={zipcode}
            units={units}
            coords={coords}
          ></TodayDetails>
        </Stack>
        <WeeklyForecast zipcode={zipcode} units={units} coords={coords} />
      </Stack>
    </Stack>
  );
}

export default App;
