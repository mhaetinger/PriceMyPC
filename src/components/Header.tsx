import { Box, Typography, Button } from "@mui/material";

export function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        backgroundColor: "#1693a5",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: 54, color: "white" }}>PRICE MY PC</Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="text" sx={{}}>
          Evaluate My pc
        </Button>
        <Button variant="text"> About Us </Button>
      </Box>
    </Box>
  );
}
