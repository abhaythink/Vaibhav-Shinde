import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function MenuAppBar() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4">App</Typography>
        <Button variant="contained" color="success"
        sx={{marginLeft:"auto"}}
        >SignIn</Button>
      </Toolbar>
    </AppBar>
  );
}
