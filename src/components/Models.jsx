import { Box, Button, Link, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

const Models = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Model</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
          <Typography>This os Model</Typography>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Cancle
          </Button>
        </Box>
      </Modal>
      <Link variant="h4" color="secondary"
      underline="alwayes" href="https://www.google.com">Click me</Link>
    </div>
  );
};

export default Models;
