import React from "react";
import useStyles from "./styles.js";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

const List = ({ places }) => {
  const classes = useStyles();
  const [type, setType] = React.useState("restaurants");
  const [rating, setRating] = React.useState(0);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurantes, Hoteles, Atracciones turisticas
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Lugar</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurantes</MenuItem>
          <MenuItem value="hotels">Hoteles</MenuItem>
          <MenuItem value="atracciones">Attractiones</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Puntuacion</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>Todos</MenuItem>
          <MenuItem value={3}>Arriba De 3 Estrellas</MenuItem>
          <MenuItem value={4}>Arriba De 4 Estrellas</MenuItem>
          <MenuItem value={4.5}>Arriba De 4.5 Estrellas</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item xs={12} key={i}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
