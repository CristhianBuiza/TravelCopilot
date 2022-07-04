import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles.js";
const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        className={classes.media}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBotton variant="h5" component="h2">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating
            name="read-only"
            size="small"
            value={Number(place.rating)}
            readOnly
          />
          <Typography gutterBottom variant="subtitle1">
            de {place.num_reviews} personas
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1" color="textSecondary">
            Precio
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1" color="textSecondary">
            Puntuacion
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>

        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          TripAdvisor Web
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
        >
          Sitio Web
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
