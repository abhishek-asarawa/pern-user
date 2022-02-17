import React from "react";
import Toolbar from "./Toolbar";
import Grid from "@mui/material/Grid";
import Total from "./Total";
import AddForm from "./AddForm";

const Home = () => {
  return (
    <>
      <Toolbar />
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        style={{ minHeight: 600 }}
      >
        <Grid item xs={7}>
          <Total />
        </Grid>
        <Grid item xs>
          <AddForm />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
