import * as React from 'react';

import {Toolbar, AppBar, Box, Button, MenuItem, Menu,  useMediaQuery, IconButton} from '@material-ui/core'
import {MenuOutlined} from '@material-ui/icons';
import {useHistory, Link} from 'react-router-dom';
import { makeStyles} from '@material-ui/styles'
import { ThemeProvider } from "@material-ui/styles";

import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

import logo from "../assets/images/logo.png";

let theme = createTheme();
theme = responsiveFontSizes(theme);


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
    
  }
}));


const Header = props => {
  let history= useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push({pathname: (pageURL)});
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push({pathname: (pageURL)});
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      menuTitle: "Blog",
      pageURL: "/blog"
    },
    {
      menuTitle: "Team",
      pageURL: "/team"
    },
    {
      menuTitle: "Contact Us",
      pageURL: "/contact"
    },
    {
      menuTitle: "Volunteer",
      pageURL: "/volunteer"
    },
    {
      menuTitle: "Donate",
      pageURL: "/donate"
    }
  ];

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <AppBar position="static" style ={{background: "#32CD32" }}>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <Link to='/'>
           <img src={logo} height = "50 px"  alt='SMHZW'/>
           </Link>
          </Box>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuOutlined />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button
                sx={{ my: 2, display: 'block' }}
                style={{color: '#fff'}}
                onClick={() => handleButtonClick("/")}
              >
                HOME
              </Button>
              <Button
                sx={{ my: 2, display: 'block' }}
                style={{color: '#fff'}}
                onClick={() => handleButtonClick("/blog")}
              >
                BLOG
              </Button>
              <Button
                sx={{ my: 2, display: 'block' }}
                style={{color: '#fff'}}
                onClick={() => handleButtonClick("/team")}
              >
                TEAM
              </Button>
              <Button
                sx={{ my: 2, display: 'block' }}
                style={{color: '#fff'}}
                onClick={() => handleButtonClick("/contact")}
              >
                CONTACT
              </Button>
              <Button
                sx={{ my: 2, display: 'block' }}
                style={{color: '#fff'}}
                onClick={() => handleButtonClick("/volunteer")}
              >
                Volunteer
              </Button>
              <Button
                sx={{ my: 2, display: 'block' }}
                style={{color: '#fff'}}
                onClick={() => handleButtonClick("/donate")}
              >
                Donate
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      </ThemeProvider>
     
    </div>
  );
};

export default Header;
