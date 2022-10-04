import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const GifItem = ({ title, url }) => {
  return (
    <Card sx={{ margin: 2, heigth: "auto" }}>
      <CardMedia component="img" image={url} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
