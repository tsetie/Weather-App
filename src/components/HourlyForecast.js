import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Stack from "@mui/material/Stack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Card from "@mui/material/Card";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Box from "@mui/material/Box";
function HourlyForecast({ zipcode, units, coords }) {
  const [hourlyTemp, setHourlyTemp] = useState([]);

  // Default get request for weather (Las Vegas)
  useEffect(() => {
    getHourlyWeather(zipcode);
  }, []);

  // Get request for new zipcode or units
  useEffect(() => {
    if (zipcode) {
      getHourlyWeather();
    } else {
      getHourlyWeatherWithGeolocation();
    }
  }, [zipcode, units]);

  function getHourlyWeather() {
    fetch(
      "https://pro.openweathermap.org/data/2.5/forecast/hourly?zip=" +
        zipcode +
        "&appid=0d31ac28d5b7522c7167936c3bc94907&units=" +
        units +
        "&cnt=24"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setHourlyTemp(data["list"]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function getHourlyWeatherWithGeolocation() {
    fetch(
      "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=" +
        coords.latitude +
        "&lon=" +
        coords.longitude +
        "&appid=0d31ac28d5b7522c7167936c3bc94907&units=" +
        units
    )
      .then((res) => res.json())
      .then((data) => {
        setHourlyTemp(data["list"]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  var today = new Date();
  return (
    <>
      <Stack spacing="2em">
        <Stack direction="row" spacing=".5em" justifyContent="center">
          <QueryBuilderIcon fontSize="large" style={{ color: "#FFF" }} />
          <Typography variant="h4" color="white" fontWeight="bold">
            Hourly Forecast
          </Typography>
        </Stack>
        <Box style={{ "overflow-y": "auto", height: "60vh" }}>
          <Stack spacing="1eam" p="1em">
            {hourlyTemp
              ? hourlyTemp.map((temp) => (
                  <Card>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      p="1em"
                      width="30vw"
                      height="3vh"
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {new Date(temp["dt"] * 1000).toLocaleTimeString(
                          "en-US",
                          {
                            timeStyle: "short",
                          }
                        )}
                      </Typography>
                      <Typography variant="h5" fontWeight="bold">
                        {Math.round(temp["main"]["temp"])}&#176;
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <img
                          src={`https://openweathermap.org/img/wn/${temp["weather"][0]["icon"]}@2x.png`}
                        ></img>
                        <Typography variant="h7" fontWeight="bold">
                          {temp["weather"][0]["main"]}
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
export default HourlyForecast;
