import { Grid } from "@mui/material";
import React from "react";

const ResponsiveGrid = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}   
        sm={8}    
        md={6}   
        lg={4}   
        xl={3}   
        sx={{ background: "red" }}
      >
       Content A Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae autem reprehenderit suscipit aliquid, vel, cupiditate nobis ab nostrum temporibus distinctio nisi beatae, quaerat saepe veritatis eligendi? Libero totam repellendus earum.
       Numquam nihil nesciunt, vero error iste ullam similique velit modi, id voluptatum libero doloribus, odit quisquam culpa dicta dignissimos natus sit possimus. Distinctio deserunt asperiores excepturi eum? Magni, voluptates quia?
       In blanditiis porro pariatur consequatur incidunt repellendus sequi odio. Deleniti, laudantium ratione? Dolor iusto vero minus nihil nobis dolores repudiandae. Explicabo tenetur ad facilis provident nemo nulla earum laborum ex?
      </Grid>

      {/* Right Panel */}
      <Grid
        item
        xs={12}   
        sm={4}    
        md={6}   
        lg={8}    
        xl={9}    
        sx={{ background: "yellow" }}
      >
       Content B
      </Grid>
    </Grid>
  );
};

export default ResponsiveGrid;
