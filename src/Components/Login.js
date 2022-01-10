import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const history = useHistory();
  const classes = useStyles();
  // create state variables for each input
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://128.199.27.165:8081/user/log_in", {
        email: user_email,
        password: user_password,
      })
      .then((response) => {
        if (response.data.status) {
          history.push("menu");
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form className={classes.root} onSubmit={login}>
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={user_email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={user_password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default Form;
