"use client";
import { Header } from "@/components/Header";
import { BodyTop } from "@/components/BodyTop";
import "@fontsource/geist/300.css";
import "@fontsource/geist/400.css";
import "@fontsource/geist/500.css";
import "@fontsource/geist/700.css";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Header />
      <BodyTop />
    </Box>
  );
}
