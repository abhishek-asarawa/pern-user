import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function AddForm() {
  return (
    <Card>
      <CardContent>
        <Grid container gap={4} justifyContent="space-evenly">
          <Grid item xs={12}>
            <TextField
              id="firstName"
              label="First Name"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Enter First Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastName"
              label="Last Name"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Enter Last Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              placeholder="Enter Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              placeholder="Enter Password"
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button>Add</Button>
      </CardActions>
    </Card>
  );
}
