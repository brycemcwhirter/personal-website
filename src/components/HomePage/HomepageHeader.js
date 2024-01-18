import React from "react";
import HomepageImage from "@site/static/img/navbar_photo.png";
import { Box, Grid } from "@mui/material";

function LeftHeader() {
  return (
    <>
      <Grid item lg>
        <h1>Image Here</h1>
      </Grid>
    </>
  );
}

function RightHeader() {
  return (
    <>
      <Grid item lg>
        <h1>Bryce McWhirter</h1>
        <h2>Glad You're Here</h2>
      </Grid>
    </>
  );
}

export default function HomepageHeader() {
  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <LeftHeader />
          <RightHeader />
        </Grid>
      </Box>
    </>
  );
}
