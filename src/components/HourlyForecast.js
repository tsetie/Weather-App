import React from "react";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Stack from "@mui/material/Stack";

function HourlyForecast(weatherData) {
  return (
    <>
      <Stack direction="row" spacing=".5em">
        <AccessTimeIcon fontSize="large" style={{ color: "FF8000" }} />
        <Typography variant="h4">Hourly Forecast</Typography>
      </Stack>
    </>
  );
}
export default HourlyForecast;
