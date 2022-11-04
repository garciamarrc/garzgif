import { useState } from "react";

import { PropTypes } from "prop-types";

import { Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanInput = inputValue.trim();
    if (cleanInput.length < 1) return;
    onNewCategory(cleanInput);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <Grid container>
        <Grid item xs={12}>
          <TextField
            sx={{ width: "100%" }}
            label="Buscar Gifs"
            value={inputValue}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ width: "100%" }}
            variant="contained"
            endIcon={<SearchIcon />}
            type="submit"
          >
            Buscar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
