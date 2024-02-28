import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Avatar from "@mui/material/Avatar";

interface AnnouncementItemProps {
  name: string;
  id: string;
  date: string;
  text: string;
}

export default function AnnouncementItem({
  name,
  id,
  date,
  text,
}: AnnouncementItemProps) {
  return (
    <>
      <Grid item xs={12} md={4} key={id} sx={{ bgcolor: "white" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "left" }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography component="p" sx={{ marginLeft: 2 }}>
              {name}
            </Typography>
          </Box>
          <Typography component="p" sx={{ marginLeft: 1.5, fontSize: "10px" }}>
            {date}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={8} sx={{ bgcolor: "white" }}>
        <Typography component="p">{text}</Typography>
      </Grid>
    </>
  );
}
