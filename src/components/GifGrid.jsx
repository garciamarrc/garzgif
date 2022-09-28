import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    console.log(newImages);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <ol>
        {images.map(({ id, title, url }) => (
          <li key={id}>
            <div>
              <p>{title}</p>
              <img src={url} alt={title} />
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};
