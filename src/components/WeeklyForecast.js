import React from "react";
import { Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

function WeeklyForecast({ weatherData }) {
  var weeklyTempsList = weatherData["list"];
  var today = new Date();
  return (
    <>
      <Stack spacing="2em">
        <Stack direction="row" spacing=".5em" justifyContent="center">
          <CalendarMonthIcon fontSize="large" style={{ color: "FF8000" }} />
          <Typography variant="h4">Weekly Forecast</Typography>
        </Stack>
        {weeklyTempsList.map((dayInfo) => (
          <Card>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              p="1em"
              width="30vw"
            >
              <Typography variant="h5">
                {today.toDateString() !==
                new Date(dayInfo["dt"] * 1000).toDateString()
                  ? new Date(dayInfo["dt"] * 1000).toLocaleDateString("en-us", {
                      weekday: "short",
                    })
                  : "Today"}
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src={`https://openweathermap.org/img/wn/${dayInfo["weather"][0]["icon"]}@2x.png`}
                ></img>
                <Typography variant="h7">
                  {dayInfo["weather"][0]["main"]}
                </Typography>
              </Stack>
              <Typography variant="h5">
                {Math.round(dayInfo["temp"]["day"])}&#176;
              </Typography>
            </Stack>
          </Card>
        ))}
      </Stack>
    </>
  );
}
export default WeeklyForecast;
