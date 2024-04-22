import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  mainListItems,
  secondaryListItems,
} from "../dashboard/components/listItems";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../dashboard/components/Title";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Function to format the date to display month, day, and time in 12-hour clock
function formatDate(dateString) {
  const options = {
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

export default function Activities() {
  const navigate = useNavigate();
  const [activityType, setActivityType] = useState("");
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
   try{
    const response = await fetch('http://localhost:5000/activities', {
      method: 'GET',
      credentials: 'include', //Send cookies with the request
    
    });
    const data = await response.json();

    if(response.ok) {
      //successful fetch
      console.log('Activities fetched successfully:', data);
      setActivities(data);
    }else{
      //failed
      console.error('Failed to fetch activities:', data.message);

    }
   }catch (error){
    console.error('Error fetching activities:', error);
   }
  };

  const handleAddActivity = async () => {
    if (!activityType.trim()) {
      console.error("Activity type is required.");
      return;
    }
  
    const newActivity = {
      activityType,
      timestamp: new Date(),
    };
  
    try {
      const response = await fetch('http://localhost:5000/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Send cookies with the request for authentication
        body: JSON.stringify(newActivity),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Successful activity creation
        console.log("Activity saved:", data);
        setActivities([...activities, {...data, timestamp: newActivity.timestamp}]);
      } else {
        // Activity creation failed
        console.error("Failed to save activity:", data.message);
      }
    } catch (error) {
      console.error("Error saving activity:", error);
    }
  };
  
  
  const handleLogout = () => {
    // Clear user session or JWT token
    // Redirect to LandingPage
    navigate("/");
  };

  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Pet Activity Dashboard
            </Typography>
            <IconButton color="inherit" onClick={handleLogout}>
              <ExitToAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{ color: "primary.main" }}
            >
              Log Pet Activity
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={activityType}
                onChange={(e) => setActivityType(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Activity Type" }}
              >
                <MenuItem value="" disabled>
                  Select Activity Type
                </MenuItem>
                <MenuItem value="Food">Food</MenuItem>
                <MenuItem value="Treats">Treats</MenuItem>
                <MenuItem value="Water">Water</MenuItem>
                <MenuItem value="Walking">Walking</MenuItem>
                <MenuItem value="Peeing">Peeing</MenuItem>
                <MenuItem value="Poop">Poop</MenuItem>
                <MenuItem value="Brushing">Brushing</MenuItem>
                <MenuItem value="Grooming">Grooming</MenuItem>
                <MenuItem value="Training">Training</MenuItem>
                <MenuItem value="Sleep">Sleep</MenuItem>
                <MenuItem value="Medicine">Medicine</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              onClick={handleAddActivity}
              sx={{ ml: 2 }}
            >
              Add Activity
            </Button>
          </Box>
          <Box sx={{ p: 3 }}>
            <React.Fragment>
              <Title>Recent Pet Activities</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Activity Type</TableCell>
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {activities.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell>{formatDate(activity.timestamp)}</TableCell>
                      <TableCell>{activity.activityType}</TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </React.Fragment>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
