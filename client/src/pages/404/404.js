import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";

const NotFound = () => (
  <Container>
    <Grid container xs={12}>
      <Grid item xs={12}>
        <h1>404 Page Not Found</h1>
        <Link exact to="/">
          Back to home page
        </Link>
      </Grid>
    </Grid>
  </Container>
);

export default NotFound;
