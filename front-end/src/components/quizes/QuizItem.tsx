import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

interface QuizItemProps {
  title: string;
  due: string;
  course: string;
  id: string;
  topic: string;
}

export default function QuizItem({
  title,
  id,
  course,
  topic,
  due,
}: QuizItemProps) {
  return (
    <>
      <Grid
        key={id}
        item
        xs={12}
        sx={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid item xs={12} sx={{ display: "flex" }}>
          <HourglassBottomIcon />
          <Typography component="p" sx={{ marginLeft: 1 }}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 1.5, display: "flex" }}>
          <Typography component="p">course</Typography>
          <Typography component="p" sx={{ marginLeft: 1 }}>
            {course}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 1.5, display: "flex" }}>
          <Typography component="p">topic</Typography>
          <Typography component="p" sx={{ marginLeft: 1 }}>
            {topic}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 1.5, display: "flex" }}>
          <Typography component="p">Date: </Typography>
          <Typography component="p" sx={{ marginLeft: 1 }}>
            {due}
          </Typography>
        </Grid>
        <Button
          variant="outlined"
          sx={{
            borderWidth: "2px",
            borderColor: "lightgreen",
            color: "lightgreen",
          }}
        >
          Quiz
        </Button>
      </Grid>
    </>
  );
}
