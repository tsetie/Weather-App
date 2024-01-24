import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function LocationBar({
  handleZipcode,
  handleCelcius,
  handleFahrenheit,
  handleGettingUserLocation,
  showAlert,
}) {
  return (
    <>
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        {showAlert ? (
          <Alert sx={{ marginBottom: "1em" }} severity="error">
            <AlertTitle>
              <strong>Location not found</strong>
            </AlertTitle>
            <strong>Enter a new zipcode!</strong>
          </Alert>
        ) : null}
      </Stack>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={8}>
          <TextField
            onChange={handleZipcode}
            type="number"
            id="outlined-basic"
            label="Search Zip Code"
            variant="outlined"
            fullWidth
            sx={{ input: { color: "#FFFFFF" } }}
            InputLabelProps={{
              style: {
                color: "#fff",
                fontWeight: "bold",
              },
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <Button onClick={handleGettingUserLocation}>
            <FmdGoodOutlinedIcon fontSize="large" style={{ color: "#FFF" }} />
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Stack
            direction="row"
            divider={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
          >
            <Button
              variant="Text"
              fullWidth
              style={{ color: "#FFFFFF", fontSize: "20px" }}
              onClick={handleFahrenheit}
            >
              F &#176;
            </Button>
            <Button
              variant="Text"
              fullWidth
              style={{ color: "#FFFFFF", fontSize: "20px" }}
              onClick={handleCelcius}
            >
              C &#176;
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
export default LocationBar;
