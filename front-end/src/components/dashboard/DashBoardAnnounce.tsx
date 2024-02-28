import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import imageWorkspace from "../../images/workspace2.jpg";

export default function DashBoardAnnounce() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexGrow: 1,
        bgcolor: "white",
        p: 3,
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <Grid item xs={8}>
        <Typography variant="h2" component="h2">
          Exams Time
        </Typography>
        <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel.
        </Typography>
        <Typography component="p" sx={{ marginTop: 3 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Grid>
      <Grid item xs={4} sx={{ display: isMediumScreen ? "none" : "block" }}>
        <Box
          component="img"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          alt="The house from the offer."
          src={imageWorkspace}
        />
      </Grid>
    </Grid>
  );
}
