"use client";
import { createTheme } from "@mui/material/styles";
import { Geist } from "next/font/google";

const geist = Geist({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  colorSchemes: { light: true },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: geist.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        textPrimary: {
          color: "white",
        },
      },
    },
  },
});

export default theme;
