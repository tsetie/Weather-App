import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

function LocationBar() {
  return (
    <>
      <Grid container justifyContent="center" spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={1}>
          <Button>
            <FmdGoodOutlinedIcon fontSize="large" />
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Stack
            direction="row"
            divider={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
          >
            <Button variant="Text" fullWidth >
              F &#176;
            </Button>
            <Button variant="Text" fullWidth>
              C &#176;
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
export default LocationBar;
