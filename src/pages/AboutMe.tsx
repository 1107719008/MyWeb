//ts component page of about me
import React from "react";
import Button from "@mui/material/Button";
import catLogo from "../assets/images/cats.png";
const AboutMe: React.FC = () => {
  return (
    <div>
      <h1>歡迎、這是About me page</h1>
      <img src={catLogo} alt="sheep" />
      <div>
        <Button variant="contained">Back</Button>
      </div>
    </div>
  );
};

export default AboutMe;
