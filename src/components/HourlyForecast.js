import React from "react";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Stack from "@mui/material/Stack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Card from "@mui/material/Card";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Box from "@mui/material/Box";
function HourlyForecast({ hourlyData }) {
  var hourlyForecast = hourlyData["list"];
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
          <Stack spacing="1em" p="1em">
            {hourlyForecast.map((hourlyTemp) => (
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
                    {new Date(hourlyTemp["dt"] * 1000).toLocaleTimeString(
                      "en-US",
                      {
                        timeStyle: "short",
                      }
                    )}
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {Math.round(hourlyTemp["main"]["temp"])}&#176;
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      src={`https://openweathermap.org/img/wn/${hourlyTemp["weather"][0]["icon"]}@2x.png`}
                    ></img>
                    <Typography variant="h7" fontWeight="bold">
                      {hourlyTemp["weather"][0]["main"]}
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
export default HourlyForecast;
