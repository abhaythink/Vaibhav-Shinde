import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Cards = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <Card sx={{ maxWidth: 300, margin: 10 }}>
        <CardMedia
          component={"img"}
          height="140"
          image="https://images.unsplash.com/photo-1756303018960-e5279e145963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt="test image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Web Design
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            sapiente, aut veritatis assumenda placeat nobis, fuga nihil quo
            doloribus animi odio sunt. Aspernatur magni debitis veritatis nam
            officiis similique laudantium?
          </Typography>
          <CardActions>
            <Button size="small" color="primary">
              {" "}
              Share
            </Button>
            <Button size="small" color="primary"
            onClick={() => setFlag(true)}
            >
              {" "}
              Delete
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <Dialog open={flag}>
        <DialogTitle>Are You Sure</DialogTitle>
        <DialogContent>
          <DialogContentText>are you sure to delete this</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button >cancle</Button>
          <Button>delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Cards;
//react memo