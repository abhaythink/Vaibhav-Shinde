import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

const TabsComponent = () => {
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4">Logo</Typography>
        <Tabs
          sx={{ marginLeft: "auto" }}
          textColor="inherit"
          indicatorColor="secondary"
          value={value}
          onChange={(e, val) => setValue(val)}
        >
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </Toolbar>
      
    </AppBar>
  );
};

export default TabsComponent;
