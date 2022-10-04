import { useState } from "react";

import { Container } from "@mui/material";
import { Alert } from "@mui/material";

import { AddCategory, GifGrid } from "./components";
import { WelcomeMessage } from "./components/WelcomeMessage";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      setError(`La categoría "${newCategory}" ya ha sido agregada`);
      return;
    }

    setError(false);

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <Container>
        <h1>
          <span style={{ color: "#F5A" }}>Garz</span>Gif
        </h1>

        <AddCategory onNewCategory={onAddCategory} />

        {error && (
          <Alert severity="error" sx={{ margin: 2 }}>
            {error}
          </Alert>
        )}

        {categories.length === 0 && <WelcomeMessage />}

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </Container>
    </>
  );
};
