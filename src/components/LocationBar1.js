import React from "react";
import {
  Typography,
  Card,
  Stack,
  Alert,
  AlertTitle,
  Grid,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

function LocationBar1({
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

      <Grid container justifyContent="flex-end" alignItems="center">
        <Grid item xs={11} lg={8}>
          <Stack direction="row">
            <TextField
              onChange={handleZipcode}
              type="number"
              label="Search Zip Code"
              variant="filled"
              sx={{
                input: { color: "#B1B2B5", background: "#061426" },
                width: "90% ",
              }}
              InputLabelProps={{
                style: {
                  color: "#B1B2B5",
                  fontWeight: "bold",
                },
              }}
            ></TextField>
            <Button onClick={handleGettingUserLocation} sx={{ width: "10%" }}>
              <FmdGoodOutlinedIcon
                fontSize="large"
                style={{ color: "#B1B2B5" }}
              />
            </Button>
          </Stack>
        </Grid>

        <Grid item lg={2} sx={{ display: { xs: "none", md: "block" } }}>
          <Stack
            direction="row"
            divider={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
          >
            <Button
              variant="Text"
              style={{ color: "#B1B2B5", fontSize: "20px" }}
              onClick={handleFahrenheit}
            >
              F &#176;
            </Button>
            <Button
              variant="Text"
              style={{ color: "#B1B2B5", fontSize: "20px" }}
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
export default LocationBar1;
