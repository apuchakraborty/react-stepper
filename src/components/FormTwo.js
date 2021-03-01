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

export default function FormTwo() {
  const classes = useStyles();

  return (
    <center>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField id="email" label="Email" variant="filled" />
        </div>
        <div>
          <TextField id="address" label="Address" variant="filled" />
        </div>
      </form>
    </center>
  );
}
