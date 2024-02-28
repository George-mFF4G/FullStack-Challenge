import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";

import AnnouncementItem from "./AnnouncementItem";

interface Announce {
  name: string;
  date: string;
  text: string;
  _id: string;
}

export default function AnnouncementList() {
  const [announcements, setAnnouncements] = useState<Announce[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/announcements");
        if (response.ok) {
          const result = await response.json();
          setAnnouncements(result);
          //   console.log(result);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: 3,
        justifyContent: "space-between",
      }}
    >
      {announcements.map((item) => (
        <AnnouncementItem
          name={item.name}
          id={item._id}
          key={item._id}
          date={item.date}
          text={item.text}
        />
      ))}
    </Grid>
  );
}
