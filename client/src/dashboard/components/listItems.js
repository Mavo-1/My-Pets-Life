import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import FlagIcon from '@mui/icons-material/Flag';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import AlarmIcon from '@mui/icons-material/Alarm';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="/activities">
      <ListItemIcon >
        <DirectionsWalkIcon />
      </ListItemIcon>
      <ListItemText primary="Activities" />
    </ListItemButton>
    <ListItemButton  component={Link} to="/goals">
      <ListItemIcon>
        <FlagIcon />
      </ListItemIcon>
      <ListItemText primary="Goals" />
    </ListItemButton>
    <ListItemButton component={Link} to="/health">
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <ListItemText primary="Health" />
    </ListItemButton>
    <ListItemButton component={Link} to="/profile">
      <ListItemIcon>
        <PetsIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton component={Link} to="/reminders">
      <ListItemIcon>
        <AlarmIcon />
      </ListItemIcon>
      <ListItemText primary="Reminders" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
