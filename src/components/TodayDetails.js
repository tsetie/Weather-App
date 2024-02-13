import React from "react";
import { useState, useEffect } from "react";
import { Card, Typography, Stack, Grid } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";

function TodayDetails1({ zipcode, units, coords }) {
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
  var gust;
  var sunrise;
  var sunset;
  var humidity;
  var chanceOfRain;
  var pressure;

  if (Object.values(todayDetails).length !== 0) {
    feelsLike = Math.floor(todayDetails["feels_like"]["day"]);
    wind = Math.floor(todayDetails["speed"]);
    gust = Math.floor(todayDetails["gust"]);
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
    humidity = Math.floor(todayDetails["humidity"]);
    chanceOfRain = todayDetails["pop"] * 100;
    pressure = Math.floor(todayDetails["pressure"] * 0.02953);
  }
  return (
    <>
      <Stack pl="1.5em">
        <Grid container spacing={2} width="96%">
          <Grid item xs={6} lg={3}>
            <Card
              sx={{
                backgroundColor: "#56637B",
                borderRadius: "2.5em",
                p: "1.5em",
                mt: "1em",
              }}
            >
              <Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  width="130vw"
                  sx={{
                    transform: {
                      xs: "translate(-1.8%)",
                      md: "translate(-.2%)",
                    },
                  }}
                >
                  <ThermostatIcon sx={{ color: "#B1B2B5" }} />
                  <Typography variant="h6" color="#B1B2B5" fontWeight="bold">
                    Feels Like
                  </Typography>
                </Stack>

                <Typography variant="h5" color="#FFF" fontWeight="bold">
                  {feelsLike}
                  {"\u00B0"}
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card
              sx={{
                backgroundColor: "#56637B",
                borderRadius: "2.5em",
                p: "1.5em",
                mt: "1em",
              }}
            >
              <Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <WaterOutlinedIcon sx={{ color: "#B1B2B5" }} />
                  <Typography variant="h6" color="#B1B2B5" fontWeight="bold">
                    Humidity
                  </Typography>
                </Stack>
                <Typography variant="h5" color="#FFF" fontWeight="bold">
                  {humidity}%
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card
              sx={{
                backgroundColor: "#56637B",
                borderRadius: "2.5em",
                p: "1.5em",
                mt: "1em",
              }}
            >
              <Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <WaterDropOutlinedIcon sx={{ color: "#B1B2B5" }} />
                  <Typography variant="h6" color="#B1B2B5" fontWeight="bold">
                    Rain
                  </Typography>
                </Stack>

                <Typography variant="h5" color="#FFF" fontWeight="bold">
                  {chanceOfRain}%
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card
              sx={{
                backgroundColor: "#56637B",
                borderRadius: "2.5em",
                p: "1.5em",
                mt: "1em",
              }}
            >
              <Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <SpeedOutlinedIcon sx={{ color: "#B1B2B5" }} />
                  <Typography variant="h6" color="#B1B2B5" fontWeight="bold">
                    Pressure
                  </Typography>
                </Stack>
                <Typography variant="h5" color="#FFF" fontWeight="bold">
                  {pressure} inHg
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card
              sx={{
                backgroundColor: "#56637B",
                borderRadius: "2.5em",
                p: "1.5em",
                mt: "1em",
              }}
            >
              <Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <AirOutlinedIcon sx={{ color: "#B1B2B5" }} />
                  <Typography variant="h6" color="#B1B2B5" fontWeight="bold">
                    Wind
                  </Typography>
                </Stack>

                {units == "imperial" ? (
                  <Typography variant="h5" color="#FFF" fontWeight="bold">
                    {wind} mph
                  </Typography>
                ) : (
                  <Typography variant="h5" color="#FFF" fontWeight="bold">
                    {wind} km/h
                  </Typography>
                )}
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card
              sx={{
                backgroundColor: "#56637B",
                borderRadius: "2.5em",
                p: "1.5em",
                mt: "1em",
              }}
            >
              <Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <AirOutlinedIcon sx={{ color: "#B1B2B5" }} />
                  <Typography variant="h6" color="#B1B2B5" fontWeight="bold">
                    Gust
                  </Typography>
                </Stack>
                {units == "imperial" ? (
                  <Typography variant="h5" color="#FFF" fontWeight="bold">
                    {gust} mph
                  </Typography>
                ) : (
                  <Typography variant="h5" color="#FFF" fontWeight="bold">
                    {gust} km/h
                  </Typography>
                )}
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={6} lg={3}>
            <Card
              sx={{
                backgroundColor: "#56637B",
                borderRadius: "2.5em",
                p: "1.5em",
                mt: "1em",
              }}
            >
              <Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <WbSunnyOutlinedIcon sx={{ color: "#B1B2B5" }} />
                  <Typography variant="h6" color="#B1B2B5" fontWeight="bold">
                    Sunrise
                  </Typography>
                </Stack>

                <Typography variant="h5" color="#FFF" fontWeight="bold">
                  {sunrise}
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card
              sx={{
                backgroundColor: "#56637B",
                borderRadius: "2.5em",
                p: "1.5em",
                mt: "1em",
              }}
            >
              <Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <WbTwilightOutlinedIcon sx={{ color: "#B1B2B5" }} />
                  <Typography variant="h6" color="#B1B2B5" fontWeight="bold">
                    Sunset
                  </Typography>
                </Stack>
                <Typography variant="h5" color="#FFF" fontWeight="bold">
                  {sunset}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
export default TodayDetails1;
