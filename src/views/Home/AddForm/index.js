import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function AddForm({ addUser }) {
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAdd = () => {
    addUser({ ...data });
    setData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <Card>
      <CardContent>
        <Grid container gap={4} justifyContent="space-evenly">
          <Grid item xs={12}>
            <TextField
              id="firstName"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
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
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
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
              name="email"
              value={data.email}
              onChange={handleChange}
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
              name="password"
              value={data.password}
              onChange={handleChange}
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
        <Button onClick={handleAdd}>Add</Button>
      </CardActions>
    </Card>
  );
}
