import React from "react";
import { Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

function WeeklyForecast({ zipcode }) {
  var today = new Date();
  const [weeklyWeatherData, setWeeklyWeatherData] = useState([]);

  // Default get request for weather (Las Vegas)
  useEffect(() => {
    getWeeklyWeather(zipcode);
  }, []);

  // Get request for new zipcode
  useEffect(() => {
    getWeeklyWeather();
  }, [zipcode]);

  function getWeeklyWeather() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" +
        zipcode +
        "&appid=0d31ac28d5b7522c7167936c3bc94907&units=imperial"
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
      <Stack spacing="2em">
        <Stack direction="row" spacing=".5em" justifyContent="center">
          <CalendarMonthIcon fontSize="large" style={{ color: "#FFF" }} />
          <Typography variant="h4" color="white" fontWeight="bold">
            Weekly Forecast
          </Typography>
        </Stack>
        <Box style={{ "overflow-y": "auto", height: "60vh" }}>
          <Stack spacing="1em" p="1em">
            {weeklyWeatherData
              ? weeklyWeatherData.map((dayInfo) => (
                  <Card>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      p="1em"
                      width="30vw"
                      height="8vh"
                    >
                      <Typography variant="h5" fontWeight="bold">
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
                      <Typography variant="h5" fontWeight="bold">
                        {Math.round(dayInfo["temp"]["day"])}&#176;
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <img
                          src={`https://openweathermap.org/img/wn/${dayInfo["weather"][0]["icon"]}@2x.png`}
                        ></img>
                        <Typography variant="h7" fontWeight="bold">
                          {dayInfo["weather"][0]["main"]}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Card>
                ))
              : null}
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
export default WeeklyForecast;
