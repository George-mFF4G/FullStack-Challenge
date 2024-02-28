import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import QuizItem from "./QuizItem";

interface Quiz {
  title: string;
  due: string;
  course: string;
  _id: string;
  topic: string;
}

export default function QuizList() {
  const [quizes, setQuizes] = useState<Quiz[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/quizes");
        if (response.ok) {
          const result = await response.json();
          setQuizes(result);
          console.log(result);
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
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {quizes.map((item) => (
        <QuizItem
          title={item.title}
          id={item._id}
          key={item._id}
          due={item.due}
          topic={item.topic}
          course={item.course}
        />
      ))}
    </Grid>
  );
}
