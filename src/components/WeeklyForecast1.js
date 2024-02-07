import React from "react";
import {
  Typography,
  Card,
  ListItem,
  Stack,
  Box,
  Divider,
  List,
  Grid,
} from "@mui/material";
import { useState, useEffect } from "react";
function WeeklyForecast1({ zipcode, units, coords }) {
  var today = new Date();
  const [weeklyWeatherData, setWeeklyWeatherData] = useState([]);

  // Default get request for weather (Las Vegas)
  useEffect(() => {
    getWeeklyWeather(zipcode);
  }, []);

  // Get request for new zipcode or units
  useEffect(() => {
    if (zipcode) {
      getWeeklyWeather();
    } else {
      getWeeklyWeatherWithGeolocation();
    }
  }, [zipcode, units, coords]);

  function getWeeklyWeather() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" +
        zipcode +
        "&appid=fcc51394a211b5d91ede128ba9c971e5&units=" +
        units
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data["cod"] != "404") {
          setWeeklyWeatherData(data["list"]);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function getWeeklyWeatherWithGeolocation() {
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
        console.log(data);
        setWeeklyWeatherData(data["list"]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#56637B",
          borderRadius: "2.5em",
          mt: "2em",
          p: "2em",
          ml: "1em",
          mr: "1em",
        }}
      >
        <Typography color="#B1B2B5" fontWeight="bold">
          7-DAY FORECAST
        </Typography>
        <Grid container>
          <Stack width="100%">
            {weeklyWeatherData
              ? weeklyWeatherData.map((dayInfo, i) => (
                  <>
                    <Stack
                      direction="row"
                      height="4vh"
                      mb="1em"
                      mt="1em"
                      justifyContent="space-around"
                      alignItems="center"
                    >
                      <Grid item xs={3} md={3}>
                        <Typography variant="h7" color="#B1B2B5">
                          {today.toDateString() !==
                          new Date(dayInfo["dt"] * 1000).toDateString()
                            ? new Date(dayInfo["dt"] * 1000).toLocaleDateString(
                                "en-us",
                                {
                                  weekday: "short",
                                }
                              )
                            : "Today"}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={2}>
                        <Typography variant="h7" color="#FFF" fontWeight="bold">
                          {Math.round(dayInfo["temp"]["day"])}&#176;
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={5}>
                        <Stack direction="row" alignItems="center">
                          <img
                            src={`https://openweathermap.org/img/wn/${dayInfo["weather"][0]["icon"]}@2x.png`}
                          ></img>
                          <Typography variant="h7" color="#FFF">
                            {dayInfo["weather"][0]["main"]}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Stack>
                  </>
                ))
              : null}
          </Stack>
        </Grid>
      </Card>
    </>
  );
}
export default WeeklyForecast1;
