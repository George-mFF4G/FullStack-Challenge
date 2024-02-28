import React from "react";

import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import DashBoardHeader from "../components/dashboard/DashBoardHeader";
import DashBoardSideBar from "../components/dashboard/DashBoardSideBar";

import Grid from "@mui/material/Grid";

import DashBoardAnnounce from "../components/dashboard/DashBoardAnnounce";
import AnnouncementList from "../components/announcements/AnnouncementList";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import QuizList from "../components/quizes/QuizList";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ display: "flex" }}>
      <DashBoardHeader />
      <CssBaseline />
      <DashBoardSideBar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "lightgrey", p: 3 }}>
        <Toolbar />
        <DashBoardAnnounce />

        <Grid
          container
          spacing={2}
          sx={{
            marginTop: 3,
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid
            item
            xs={12}
            md={8}
            sx={{ bgcolor: "white", height: { xs: "auto", md: "100%" } }}
          >
            <Typography variant="h4" component="h4">
              Exaxms Time
            </Typography>
            <Typography component="p">Exaxms Time</Typography>
            <AnnouncementList />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              bgcolor: "white",
              padding: "10px",
              marginTop: isMediumScreen ? 3 : 0,
            }}
          >
            <Typography variant="h4" component="h4">
              Exaxms Time
            </Typography>
            <Typography component="p">Exams Time</Typography>
            <QuizList />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
