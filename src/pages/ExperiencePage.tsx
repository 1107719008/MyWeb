//ts component page of experience
import React from "react";
import Button from "@mui/material/Button";
import catLogo from "../assets/images/cats.png";
const Experience: React.FC = () => {
  return (
    <div>
      <h1>歡迎、這是experience page</h1>
      <img src={catLogo} alt="sheep" />
      <div>
        <Button variant="contained">Back</Button>
      </div>
    </div>
  );
};

export default Experience;