import * as React from "react";
import Paper from "@mui/material/Paper";

export default function Total() {
  return (
    <Paper
      elevation={20}
      style={{
        textAlign: "center",
        height: 100,
        width: 400,
        lineHeight: "100px",
        fontSize: "50px",
      }}
    >
      Total Users : 10
    </Paper>
  );
}
