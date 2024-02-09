import React from "react";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

import Card from "@mui/material/Card";

function TodayDetails({ zipcode, units, coords }) {
  const [todayDetails, setTodayDetails] = useState({});

  // Default get request for air conditions (Lowell)
  useEffect(() => {
    getTodayDetails(zipcode);
  }, []);

  // Get request for new zipcode
  useEffect(() => {
    if (zipcode) {
      getTodayDetails();
    } else {
      getTodayDetailsWithGeolocation();
    }
  }, [zipcode, units]);

  function getTodayDetails() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" +
        zipcode +
        "&appid=fcc51394a211b5d91ede128ba9c971e5&units=" +
        units +
        "&cnt=1"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data["cod"] != "404") {
          setTodayDetails(data["list"][0]);
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function getTodayDetailsWithGeolocation() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" +
        coords.latitude +
        "57&lon=" +
        coords.longitude +
        "&appid=fcc51394a211b5d91ede128ba9c971e5&units=" +
        units
    )
      .then((res) => res.json())
      .then((data) => {
        setTodayDetails(data["list"][0]);
      })
      .catch((err) => {
        // console.log(err.message);
      });
  }
  var feelsLike;
  var wind;
  var sunrise;
  var sunset;

  if (Object.values(todayDetails).length !== 0) {
    feelsLike = Math.floor(todayDetails["feels_like"]["day"]);
    wind = Math.floor(todayDetails["gust"]);
    sunrise = new Date(todayDetails["sunrise"] * 1000).toLocaleTimeString(
      "en-US",
      {
        timeStyle: "short",
      }
    );
    sunset = new Date(todayDetails["sunset"] * 1000).toLocaleTimeString(
      "en-US",
      {
        timeStyle: "short",
      }
    );
  }

  return (
    <>
      <Card
        sx={{
          backgroundColor: "#56637B",
          borderRadius: "2.5em",
          height: "30%",
          p: "2em",
          mt: "1.5em",
        }}
      >
        <Typography color="#B1B2B5" fontWeight="bold" pb="1em">
          DAY DETAILS
        </Typography>
        {/* 1 row */}
        <Stack direction="row">
          {/* col 1 holding feels like and wind */}
          <Stack width="50%">
            {/* col 1 row 1 holding feels like */}
            <Stack mb="2em">
              <Typography variant="h5" color="#B1B2B5" fontWeight="bold">
                Feels Like
              </Typography>
              <Typography variant="h4" color="#FFF" fontWeight="bold">
                {feelsLike}
                {"\u00B0"}
              </Typography>
            </Stack>
            {/* col 1 row 2 holding wind */}
            <Stack>
              <Typography variant="h5" color="#B1B2B5" fontWeight="bold">
                Wind
              </Typography>
              {units == "imperial" ? (
                <Typography variant="h4" color="#FFF" fontWeight="bold">
                  {wind} m/h
                </Typography>
              ) : (
                <Typography variant="h4" color="#FFF" fontWeight="bold">
                  {wind} km/h
                </Typography>
              )}
            </Stack>
          </Stack>
          {/* col 2 holding sunrise/sunset */}
          <Stack>
            {/* col 2 row 1 holding sunrise */}
            <Stack mb="2em">
              <Typography variant="h5" color="#B1B2B5" fontWeight="bold">
                Sunrise
              </Typography>
              <Typography variant="h4" color="#FFF" fontWeight="bold">
                {sunrise}
              </Typography>
            </Stack>
            {/* col 2 row 2 holding sunset */}
            <Stack>
              <Typography variant="h5" color="#B1B2B5" fontWeight="bold">
                Sunset
              </Typography>
              <Typography variant="h4" color="#FFF" fontWeight="bold">
                {sunset}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
export default TodayDetails;
