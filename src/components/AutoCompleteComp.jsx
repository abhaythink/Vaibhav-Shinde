import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const AutoCompleteComp = () => {
  const courses = ["react", "nodeJs", "mern", "java"];
  return (
    <div>
      <Autocomplete
        sx={{ width: 200 }}
        options={courses}
        renderInput={(params) => (
          <TextField {...params} label="Select a course" />
        )}
      />
    </div>
  );
};

export default AutoCompleteComp;
