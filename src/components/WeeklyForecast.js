import React from "react";
import { ListItem, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { useState, useEffect } from "react";

function WeeklyForecast({ zipcode, units, coords }) {
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
          p: "1.5em",
        }}
      >
        <Stack
          direction="row"
          width="25vw"
          height="4vh"
          pt="1em"
          pl="1em"
          pr="1em"
        >
          <Typography color="#B1B2B5" fontWeight="bold">
            7-DAY FORECAST
          </Typography>
        </Stack>
        <List>
          {weeklyWeatherData
            ? weeklyWeatherData.map((dayInfo, i) => (
                <>
                  <ListItem>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      width="25vw"
                      height="4vh"
                      mb="1em"
                      mt="1em"
                    >
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
                      <Typography variant="h7" color="#FFF" fontWeight="bold">
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
                        <Typography variant="h7" color="#FFF">
                          {dayInfo["weather"][0]["main"]}
                        </Typography>
                      </Stack>
                    </Stack>
                  </ListItem>
                  {i < 6 && <Divider variant="middle" component="li" />}
                </>
              ))
            : null}
        </List>
      </Card>
    </>
  );
}
export default WeeklyForecast;
