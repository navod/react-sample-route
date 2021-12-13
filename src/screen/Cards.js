import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
  Paper,
  experimentalStyled as styled,
} from "@mui/material";
import data from "../../src/util/data";
import { Link } from "react-router-dom";
import "../App.css";

const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.,
  padding: theme.spacing(2),
  textAlign: "center",
  //   color: theme.palette.text.secondary,
}));

export default function Cards() {
  return (
    <div style={{ padding: 20, marginLeft: 40 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={6}>
          <Card
            sx={{
              maxWidth: "100%",
              borderRadius: 5,
              height: "75%",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                image="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80"
                alt="green iguana"
                style={{ objectFit: "cover" }}
              />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ position: "absolute", top: 10 }}
              ></Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={8} style={{ marginLeft: 20, marginTop: 6 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 3 }}
            columns={{ xs: 1, sm: 5, md: 12 }}
            style={{ width: 850 }}
          >
            {data.map((items, index) => {
              return (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Link to="/profile">
                    <Card
                      sx={{
                        maxWidth: 300,
                        borderRadius: 5,
                        height: 250,
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="250"
                          image={items.image}
                          alt="green iguana"
                          style={{ objectFit: "cover" }}
                        />
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            position: "absolute",
                            top: 10,
                            color: "white",
                            fontWeight: "bold",
                            left: 10,
                          }}
                        >
                          {items.title}
                        </Typography>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
