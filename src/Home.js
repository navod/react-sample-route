import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Typography variant="h1" component="h1" color="green">
        Home
      </Typography>
      <Stack spacing={2} direction="row">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button color="success" variant="outlined">
            Home
          </Button>
        </Link>
        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <Button color="success" variant="contained">
            Click to about us
          </Button>
        </Link>

        <Link to="/contactus" style={{ textDecoration: "none" }}>
          <Button color="success" variant="outlined">
            Click to Contact us
          </Button>
        </Link>
      </Stack>
    </div>
  );
}
