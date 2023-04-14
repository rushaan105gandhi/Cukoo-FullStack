import {
  Box,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import chef from "../../static/chef.jpg";
const Rightbar = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4"
                color={"tomato"}
                sx={{
                  fontFamily: "splash, cursive",
                  textAlign: { xs: "center", md: "left" },
                }}>
        Hey I'm Rushaan Gandhi
      </Typography>
      <CardMedia
        component={"img"}
        height="300px"
        image={chef}
        alt="burger_image"
        sx={{
          width: "400px",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
            boxSizing: "border-box",
            zIndex: 1,
            transition: `all 0.50s ease`,
          },
        }}
      />
      <Typography  variant="h4"
                color={"tomato"}
                sx={{
                  fontFamily: "splash",
                  textAlign: { xs: "center", md: "left" },
                }}>
        {" "}
        I absolutely loved to get this website for you!{" "}
      </Typography>
      <Typography align="left" variant="body1">
        {" "}
        Do visit my social media handles! <br />{" "}
        <a href="https://www.instagram.com/rushaan_22/">Instagram</a><br />
        <a href="https://www.linkedin.com/feed/" >LinkedIn</a>
      </Typography>
      {/* <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography align="center" variant="body1">
          {/* Ads Here */}
        {/* </Typography>
      </Card>
      <Typography align="center" color="white" bgcolor="tomato" mt={2}>
        Subscribe Via Email
      </Typography>
      <Box sx={{ pl: 10 }}>
        <TextField
          label="Your Email here!"
          variant="standard"
          color="warning"
        />
        <IconButton>
          <SendIcon sx={{ color: "tomato" }} />
        </IconButton>
      </Box>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography align="center" variant="body1">
          Ads Here
        </Typography>
      // </Card> */}
    </Box>
  );
};

export default Rightbar;
