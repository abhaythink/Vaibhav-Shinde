import { Container, Typography } from "@mui/material";
import React from "react";

const Containers = () => {
  return (
    <>
      <Container sx={{ backgroundColor: "yellow" }} maxWidth="xs">
        <Typography variant="body2">This is Xs</Typography>
      </Container>
      <br />

      <Container sx={{ backgroundColor: "yellow" }} maxWidth="sm">
        <Typography variant="body2">This is small</Typography>
      </Container>
<br />
      <Container sx={{ backgroundColor: "yellow" }} maxWidth="md">
        <Typography variant="body2">This is Medium</Typography>
      </Container>
<br />
      <Container sx={{ backgroundColor: "yellow" }} maxWidth="lg">
        <Typography variant="body2">This is Lg</Typography>
      </Container>
<br />
      <Container sx={{ backgroundColor: "yellow" }} maxWidth="xl">
        <Typography variant="body2">This is xl</Typography>
      </Container>

      
    </>
  );
};

export default Containers;
