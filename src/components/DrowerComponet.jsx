import {
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

const DrowerComponet = () => {
  const [open, setOpen] = useState(false);
  const courses = ["ReactJs", "nodeJs", "Mongodb", "Mern"];
  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Drawer open={open} onClose={(open) => setOpen(false)}>
        <List>
          {courses.map((course) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={course}></ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default DrowerComponet;
