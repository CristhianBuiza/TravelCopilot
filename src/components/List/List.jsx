import React from "react";
import useStyles from "./styles.js";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import "./styles.js";
const List = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurantes, Hoteles, Atracciones turisticas
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel value="" onChange={""}>
          Type
        </InputLabel>
        <Select value="" onChange={""}>
          <MenuItem value="restaurants">Restaurantes</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
