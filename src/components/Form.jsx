import { CheckBox } from "@mui/icons-material";
import {
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [inputs, setInput] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    courses: "",
    gender: "",
  });

  const handleChange = (e) => {
    console.log(e);
    setInput((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <TextField
          onChange={handleChange}
          value={inputs.name}
          placeholder="Enter Name"
          name="name"
          type="text"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          onChange={handleChange}
          value={inputs.email}
          placeholder="Enter Email"
          name="email"
          type="email"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          onChange={handleChange}
          value={inputs.password}
          placeholder="Enter Password"
          name="password"
          type="password"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <FormGroup sx={{ margin: "40px" }}>
          <FormControlLabel
            label="I Agree T&C"
            control={
              <Checkbox
                onChange={() =>
                  setInput((prev) => ({
                    ...prev,
                    terms: !inputs.terms,
                  }))
                }
              />
            }
          />
        </FormGroup>
        <br />
        <FormControl fullWidth>
          <InputLabel>Courses</InputLabel>
          <Select
            labelId="menu"
            id="menu-list"
            label="couses"
            value={inputs.courses}
            onChange={handleChange}
            name="courses"
          >
            <MenuItem value={"mongodb"}>Mongodb</MenuItem>
            <MenuItem value={"express"}>Mongodb</MenuItem>
            <MenuItem value={"node"}>Node</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
          </Select>
        </FormControl>

        <Button sx={{ margin: "20px" }} type="submit">
          Submit
        </Button>

        <FormControl>Gender</FormControl>
        <RadioGroup name="gender" defaultValue={"male"} onChange={handleChange}>
          <FormControlLabel
            value={"male"}
            label="Male"
            control={<Radio />}
          ></FormControlLabel>

          <FormControlLabel
            value={"female"}
            label="Female"
            control={<Radio />}
          ></FormControlLabel>
        </RadioGroup>
      </form>
    </>
  );
};
export default Form;
