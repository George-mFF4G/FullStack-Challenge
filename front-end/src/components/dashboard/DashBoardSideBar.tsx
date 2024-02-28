import React from "react";

import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

// import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HouseIcon from "@mui/icons-material/House";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BookIcon from "@mui/icons-material/Book";
import SchoolIcon from "@mui/icons-material/School";
import CampaignIcon from "@mui/icons-material/Campaign";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import image2 from "../../images/logo.png";

const drawerWidth = 240;

// interface ListItem {
//   key: string;
//   text: string;
//   icon: React.ReactNode;
// }

// interface ListProps {
//   items: ListItem[];
//   drawerWidth: number;
// }

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
          background: `linear-gradient(to bottom, rgb(48, 78, 95) 0% ,  rgb(38, 156, 213) 100%)`,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <img src={image2} alt={"text for alt"} />
      <Toolbar />
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
