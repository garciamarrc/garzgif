import React from "react";

import { GifItem } from "./";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { LinearProgress } from "@mui/material";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <LinearProgress />}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
