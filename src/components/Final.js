import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function Final() {
  const classes = useStyles();

  return (
    <center>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField id="location" label="Location" variant="filled" />
        </div>
        <div>
          <TextField id="pin" label="pin" variant="filled" />
        </div>
      </form>
    </center>
  );
}
