import * as React from "react";
import { useState } from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import HourlyForecast1 from "./components/HourlyForecast";
import LocationBar1 from "./components/LocationBar";
import TodayDetails1 from "./components/TodayDetails";
import TodayInfo1 from "./components/TodayInfo";
import WeeklyForecast1 from "./components/WeeklyForecast";

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
    <Grid
      container
      sx={{
        pb: "1em",
        background: `linear-gradient(to right,${backgroundColor}, ${backgroundColor2})`,
      }}
    >
      <Grid item xs={12} lg={12} m="1em">
        <LocationBar1
          handleZipcode={handleZipcode}
          handleCelcius={handleCelcius}
          handleFahrenheit={handleFahrenheit}
          handleGettingUserLocation={handleGettingUserLocation}
          showAlert={showAlert}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TodayInfo1 zipcode={zipcode} units={units} coords={coords} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <HourlyForecast1
          zipcode={zipcode}
          units={units}
          coords={coords}
          setShowAlert={setShowAlert}
        />
      </Grid>
      <Grid item xs={12} lg={4} justifyContent="space-between">
        <WeeklyForecast1 zipcode={zipcode} units={units} coords={coords} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <TodayDetails1 zipcode={zipcode} units={units} coords={coords} />
      </Grid>
    </Grid>
  );
}

export default App;
