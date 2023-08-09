import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function TodayInfo({ weatherData }) {
  var city = weatherData["city"]["name"];
  var temp = Math.round(weatherData["list"][0]["temp"]["day"]);
  return (
    <>
      <Box display="flex" justifyContent="center" mt="2.5em">
        <Typography variant="h2">
          {" "}
          {city} {temp}&#176;
        </Typography>
      </Box>
    </>
  );
}
export default TodayInfo;

//Add day and night temp and forecast (cloudy, rainy, etc)
