import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { useLocation, useHistory } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from "@mui/material";

const Header = () => {
  const [headerTitle, setHeaderTitle] = useState('Dashboard')
  const [showBackBtn, setShowBackBtn] = useState(false)
  const location = useLocation();
  const history = useHistory()

  useEffect(() => {
    if (location?.pathname === '/list-pull-request') {
      setHeaderTitle('Pull Request List View')
      setShowBackBtn(true)
    } else if (location?.pathname === '/list-issues') {
      setHeaderTitle('Issues List View')
      setShowBackBtn(true)
    } else if (location?.pathname === '/') {
      setHeaderTitle('Dashboard')
      setShowBackBtn(false)
    }
  }, [location])

  const handleBack = () => {
    history.push('/')
  }

  return (
    <AppBar position="static">
      <Toolbar>
        {showBackBtn ? <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => handleBack()}
        >
          <ArrowBackIcon />
        </IconButton> : null}
        <Typography variant="subtitle1">
          {headerTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};


export default Header