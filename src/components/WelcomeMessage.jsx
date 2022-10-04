import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const WelcomeMessage = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ marginTop: 10 }}>
        Comienza a buscar <span style={{ color: "#F5A" }}>GIFS</span>
      </Typography>
    </Box>
  );
};
