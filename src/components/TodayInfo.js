import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

function TodayInfo({ weatherData }) {
  var city = weatherData["city"]["name"];
  var temp = Math.round(weatherData["list"][0]["temp"]["day"]);
  var minTemp = Math.round(weatherData["list"][0]["temp"]["min"]);
  var maxTemp = Math.round(weatherData["list"][0]["temp"]["max"]);
  return (
    <>
      <Box display="flex" justifyContent="center" mt="2.5em">
        <Stack p={3.5}>
          <Typography variant="h2" color="white">
            {city} {temp}&#176;
          </Typography>

          <Stack direction="row" spacing="1.5em" justifyContent="center">
            <Typography variant="h5" color="#FF8000" fontWeight="bold">
              Low {minTemp}&#176;
            </Typography>
            <Typography variant="h5" color="#FF8000" fontWeight="bold">
              Hi {maxTemp}&#176;
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
export default TodayInfo;

//Add day and night temp and forecast (cloudy, rainy, etc)
