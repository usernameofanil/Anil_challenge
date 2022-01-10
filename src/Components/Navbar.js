import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import { Link } from "react-router-dom";
import "@fontsource/roboto";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  cart: {
    justifyContent: "right",
    padding: "5px",
    marginRight: "75px",
  },
  link: {
    color: "white",
    border: "2px",
    fontFamily: "ui-monospace",
    marginRight: "20px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <RestaurantOutlinedIcon />

            <Typography variant="h6" className={classes.title}>
              Food's Restaurant
            </Typography>
            <Typography variant="h6" className={classes.cart}>
              <div className={classes.navlinks}>
                <Link to="/" className={classes.link}>
                  Home
                </Link>
                <Link to="/list" className={classes.link}>
                  List
                </Link>
                <Link to="/menu" className={classes.link}>
                  Menu
                </Link>
                <Link to="/login" className={classes.link}>
                  Login
                </Link>
                <Link to="/register" className={classes.link}>
                  Register
                </Link>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
