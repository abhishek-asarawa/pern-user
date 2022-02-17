import React from "react";
import Grid from "@mui/material/Grid";
import Axios from "axios";

import Toolbar from "./Toolbar";
import Total from "./Total";
import AddForm from "./AddForm";

const Home = () => {
  const [usersCount, setUsersCount] = React.useState(0);

  const add2Count = () => setUsersCount((prev) => prev + 1);

  const fetchUsersCount = React.useCallback(async () => {
    try {
      let response = await Axios.get("/api/auth/total");

      if (response.status === 200) {
        setUsersCount(response.data.data.total);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  const addUser = async (data) => {
    try {
      const { firstName, lastName, email, password } = data;
      let response = await Axios.post("/api/auth/signup", {
        firstName,
        lastName,
        password,
        email,
        verifyPassword: password,
      });

      if (response.status === 200) {
        add2Count();
      }
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchUsersCount();
  }, [fetchUsersCount]);

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
          <Total count={usersCount} />
        </Grid>
        <Grid item xs>
          <AddForm addUser={addUser} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
