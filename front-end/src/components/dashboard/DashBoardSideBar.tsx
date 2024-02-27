import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import HouseIcon from "@mui/icons-material/House";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BookIcon from "@mui/icons-material/Book";
import SchoolIcon from "@mui/icons-material/School";
import CampaignIcon from "@mui/icons-material/Campaign";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const drawerWidth = 240;

interface ListItem {
  key: string;
  text: string;
  icon: React.ReactNode;
}

interface ListProps {
  items: ListItem[];
  drawerWidth: number;
}

const items = [
  { key: "dashboard", text: "DashBoard", icon: <HouseIcon /> },
  { key: "Schedule", text: "Schedule", icon: <CalendarMonthIcon /> },
  { key: "Course", text: "Course", icon: <BookIcon /> },
  { key: "Gradebook", text: "Gradebook", icon: <SchoolIcon /> },
  { key: "Performance", text: "Performance", icon: <TrendingUpIcon /> },
  { key: "Announcement", text: "Announcement", icon: <CampaignIcon /> },
];

export default function ErrorPage() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          // backgroundColor: "pink",
          // background: `linear-gradient(34deg, rgba(2,0,36,1) 0%, rgba(9,66,121,1) 35%, rgba(0,212,255,1) 100%)`,
          background: `linear-gradient(to bottom, rgb(48, 78, 95) 0% ,  rgb(38, 156, 213) 100%)`,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <img src={`./images/logo.png`} alt={`alt text`} />
      <Toolbar />
      {/* <Divider /> */}
      <List>
        {items.map((item) => (
          <ListItemButton
            key={item.key}
            sx={{
              padding: 2,
              marginTop: 2,
              marginBottom: 2,
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 1)",
                color: "lightgreen",
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
