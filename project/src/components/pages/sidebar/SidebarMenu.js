import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Routes from '../../../routes/Route';
import { ListItemAvatar } from '@mui/material';
// import './sidebar.css';

// import { makeStyles } from '@material-ui/core';
// const useStyles = makeStyles((theme) => ({
//   marginLeft: {
//     marginLeft: 10,
//   },
//   menuText: {
//     display: 'flex',
//     alignItems: 'center',
//     textDecoration: 'none',
//     color: theme.palette.primary.dark,
//   },
// }));
const SidebarMenu = () => {
  //   const classes = useStyles();
  // console.log("Routes",Routes)

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (e, index) =>{
    setSelectedIndex(index)
  }
  return (
    <>
      <List >
        {Routes.map(
          (route, index) =>
            route.showInMenu && (
              <NavLink
                key={index}
                to={route.path}
                // style={{ textDecoration: 'none', color: 'rgb(117 117 117)',backgroundColor:"black" }}
                style={({ isActive }) => ({ color: isActive ? "#0e0af3" : "rgb(84 82 84 / 71%)",backgroundColor:isActive ?"#0e0af3":"rgb(84 82 84 / 71%)" })}
              >
                <ListItem
                  button
                  key={route.title + index}
                  // selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}>
                  <ListItemAvatar>{route.icon}</ListItemAvatar>
                  <ListItemText primary={route.title} />
                </ListItem>
              </NavLink>
            )
        )}
      </List>
    </>
  );
};

export default SidebarMenu;
