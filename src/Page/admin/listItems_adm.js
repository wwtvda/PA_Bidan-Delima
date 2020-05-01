import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
//import ListSubheader from '@material-ui/core/ListSubheader';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
  <div>
    <ListItemLink href="/dAdm">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItemLink>
    <ListItemLink href="/AdmUsr">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="List User" />
    </ListItemLink>
  </div>
);

export const secondaryListItems = (
  <div>
  </div>
);