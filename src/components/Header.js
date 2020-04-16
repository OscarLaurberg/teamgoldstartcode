import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, IconButton, Typography, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { AuthContext } from "../contexts/AuthContext";

export default function Header({ loginMsg, toggleModal }) {
  const {
    auth: { isAdmin, isLoggedIn, username, roles }
  } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          component={NavLink}
          exact
          to="/"
          color="inherit"
          aria-label="home"
        >
          <HomeIcon />
        </IconButton>
        {isLoggedIn && (
          <IconButton component={NavLink} to="/jokes" color="inherit">
            Jokes
          </IconButton>
        )}
        {isAdmin && (
          <IconButton component={NavLink} to="/scrape" color="inherit">
            Scrape
          </IconButton>
        )}
        <IconButton component={NavLink} to="/content3" color="inherit">
          Content 3
        </IconButton>
        <IconButton
          component={NavLink}
          to="/login-out"
          color="inherit"
          onClick={toggleModal}
        >
          {loginMsg}
        </IconButton>
        {isLoggedIn && (
          <Typography style={{ flex: 1 }} variant="h6" noWrap>
            username: {username}, roles: {roles.join(", ")}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
}
