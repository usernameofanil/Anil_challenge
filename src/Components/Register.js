import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

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
  const classes = useStyles();
  // create state variables for each input
  const [user_name, setName] = useState("");
  const [user_mobile, setMobile] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [user_address, setAddress] = useState("");

  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://128.199.27.165:8081/user/register", {
        name: user_name,
        password: user_password,
        mobile: user_mobile,
        email: user_email,
        address: user_address,
      })
      .then((res) => {
        if (res.data.status) {
          alert(res.data.message);
          window.location.reload();
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form className={classes.root} onSubmit={register}>
      <TextField
        label="User Name"
        variant="filled"
        required
        value={user_name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="User Mobile No"
        variant="filled"
        required
        value={user_mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
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
      <TextField
        label="Address"
        variant="filled"
        type="text"
        required
        value={user_address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default Form;
