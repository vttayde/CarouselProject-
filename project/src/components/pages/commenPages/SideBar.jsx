import React, { useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import SidebarMenu from '../sidebar/SidebarMenu';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';  
import Alert from '@mui/material/Alert'
import CloseIcon from '@mui/icons-material/Close';
import '../sidebar/SidebarStyle.css'
import {useNavigate} from 'react-router-dom'


import {
  Autocomplete,
  Avatar,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Button,
} from '@mui/material';
const drawerWidth = 240;


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));
const SideBar = ({ msgAlert }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const settings = ['Profile', 'Account', 'Logout'];

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [message, setMessage] = React.useState(msgAlert?.message);

  const [openPopUp, setOpenPopUp] = React.useState(false)

  useEffect(() => {
    setMessage(msgAlert?.message)
    if (msgAlert?.message) {
      setOpenPopUp(true)
    }
  }, [msgAlert])
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (e, setting) => {
    e.preventDefault();
    // console.log("xsssss",setting)
    setAnchorElUser(null);
    if (setting === "Logout") {
      localStorage.removeItem('appToken');
      navigate('/');
    }
    if (setting === "Account") {
      // localStorage.removeItem('appToken');
      navigate('/page-under-constraction');
    }
    if (setting === "Profile") {
      // localStorage.removeItem('appToken');
      navigate('/page-under-constraction');
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  /* Alert Sms */
  const handleClosePopup = () => {
    setOpenPopUp(false)
  };
  const handleOpenPopup = () => {
    setOpenPopUp(true)
  }
  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClosePopup}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClosePopup}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  // if(messge!=undefined){
  //   setOpenPopUp(true)
  // }
  /* Alert Sms */
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Carousel App
          </Typography>
          <Box sx={{ flexGrow: 0, display: 'flex' }}>
            <Tooltip title="Open settings" >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <Avatar >
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={(e) => handleCloseUserMenu(e, setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader onClick={handleDrawerClose} sx={{ justifyContent: "space-between" }}>
          <IconButton sx={{ p: 0 }}>
            <Avatar >
              <PermIdentityTwoToneIcon />
            </Avatar>
          </IconButton>
          <IconButton >
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        
        <SidebarMenu />
      </Drawer>
      
    </>
  );
};
export default SideBar;
