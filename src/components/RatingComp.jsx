import { Rating, Typography } from "@mui/material";
import React, { useState } from "react";

const RatingComp = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Rating
        value={value}
        onChange={(e, val) => setValue(val)}
        size="large "
      />
      <Typography>Ratined {value !== undefined ? value : 0} stars</Typography>
    </div>
  );
};

export default RatingComp;
