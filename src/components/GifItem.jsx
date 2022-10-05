import React from "react";

import PropTypes from "prop-types";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

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

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
