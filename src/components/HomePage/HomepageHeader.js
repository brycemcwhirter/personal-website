import React from "react";
import { Box, Button, Grid, Container } from "@mui/material";

import HeaderImage from "@site/static/img/navbar_photo.png";

function LeftHeader() {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        lg={6}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <img src={HeaderImage} />
      </Grid>
    </>
  );
}

function RightHeader() {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        lg={6}
        direction="column"
        justifyContent="center"
      >
        <h1>Bryce McWhirter</h1>
        <h3>Glad You're Here</h3>
        <Button href="/contact" variant="outlined">
          Contact Me
        </Button>
      </Grid>
    </>
  );
}

export default function HomepageHeader() {
  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={6}>
            <LeftHeader />
            <RightHeader />
          </Grid>
        </Container>
      </Box>
    </>
  );
}
