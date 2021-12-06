import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <div>
      <Typography variant="h1" component="h1" color="error">
        About us
      </Typography>
      <Stack spacing={2} direction="row">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button color="error" variant="outlined">
            Home
          </Button>
        </Link>
        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <Button color="error" variant="contained">
            Click to about us
          </Button>
        </Link>

        <Link to="/contactus" style={{ textDecoration: "none" }}>
          <Button color="error" variant="outlined">
            Click to Contact us
          </Button>
        </Link>
      </Stack>
    </div>
  );
}
