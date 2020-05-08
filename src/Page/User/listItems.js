import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Kelola Pasien" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EventAvailableIcon />
      </ListItemIcon>
      <ListItemText primary="Kelola Pengingat" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <ListItemText primary="Data Kesehatan" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ContactMailIcon />
      </ListItemIcon>
      <ListItemText primary="Data Konsultasi" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
  </div>
);