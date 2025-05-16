import { Box, Typography, Button } from "@mui/material";

export function BodyTop() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "500px",
        backgroundColor: "#7ececa",
      }}
    >
      <Box
        sx={{
          border: "1px solid black",
          boxSizing: "border-box",
          width: "100vw",
          textAlign: "center",
          backgroundColor: "#a0ded6",
          padding: 1,
          fontSize: 24,
        }}
      >
        <Typography
          sx={{
            color: "white",
            WebkitTextStroke: "0,5px black",
          }}
        >
          Texto de aviso para nunca confiar 100% num site de um estranho
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          textAlign: "left",
          backgroundColor: "#7ececa",
          height: "400px",
          padding: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: 54,
            color: "white",
            WebkitTextStroke: "2px black",
            textAlign: "left",
          }}
        >
          How could i <br />
          know the price
          <br />
          of my PC?
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: 24,
          color: "white",
        }}
      >
        Asses your computer on our website!
      </Typography>
    </Box>
  );
}
