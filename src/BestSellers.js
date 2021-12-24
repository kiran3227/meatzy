import * as React from "react";
import CardItem from "./CardItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

function BestSellers() {
  return (
    <Container>
      <Typography gutterBottom variant="h5" component="div">
        Best Sellers
      </Typography>

      <Grid container>
        <Grid xs={4}>
          <CardItem />
        </Grid>
        <Grid xs={4}>
          <CardItem />
        </Grid>
        <Grid xs={4}>
          <CardItem />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BestSellers;
