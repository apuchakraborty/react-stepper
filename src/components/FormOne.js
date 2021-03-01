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

export default function FormOne() {
  const classes = useStyles();

  return (
    <center>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField id="fname" label="First Name" variant="filled" />
        </div>
        <div>
          <TextField id="lname" label="Last Name" variant="filled" />
        </div>
      </form>
    </center>
  );
}
