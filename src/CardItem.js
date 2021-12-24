import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardActionArea, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

export default function CardItem() {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="194"
          image="https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/4f2023a6-ec0e-84c7-ae4e-1090534a2210/original/1584770367.3699--2020-03-2111_29_27--738.jpeg?format=webp"
          alt="Paella dish"
        />
        <CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              columns={15}
              spacing={1}
              style={{ paddingBottom: "5px" }}
            >
              <Grid xs={13}>
                <Typography gutterBottom variant="h6" component="div">
                  Chicken Curry Cut (Small Pcs)
                </Typography>
              </Grid>
              <Grid xs={2}>
                <Grid container justifyContent="end">
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Typography
            gutterBottom
            variant="body2"
            component="div"
            noWrap
            color="text.secondary"
          >
            Skinless, bone pink, boneless meat from the upper chick...
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography gutterBottom variant="body2" component="div">
                  Net Weight: 500gm
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom variant="body2" component="div">
                  Gross: 565gm
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "-2px", marginTop: "4px" }}
          >
            <Grid container>
              <Grid xs={6}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="error.main"
                >
                  $255.00
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Grid container justifyContent="end">
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    style={{ marginTop: "3px" }}
                  >
                    ADD TO CART
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider light />
        <Grid
          sx={{ flexGrow: 1 }}
          container
          style={{ paddingBottom: "10px", marginTop: "6px" }}
        >
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item>
                <DeliveryDiningIcon color="error" />
              </Grid>
              <Grid item>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="text.secondary"
                  component="div"
                  align="center"
                  style={{ padding: "2px" }}
                >
                  Today in 90min
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          xs={{ flexGrow: 1 }}
          spacing={1}
          justifyContent="center"
        >
          <Grid xs={6}></Grid>
          <Grid xs={6}></Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
