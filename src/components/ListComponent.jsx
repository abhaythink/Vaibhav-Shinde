import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

const ListComponent = () => {
  const courses = ["react", "nodeJs", "mern", "java"];
  return (
    <>
      <List sx={{ width: 250, background: "gray" }}>
        {courses.map((course, index) => {
          return (
            <ListItem key={index}>
              <ListItemButton>{">"}</ListItemButton>
              <ListItemText primary={course} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ListComponent;
