// TestetComponent.tsx
import * as React from "react";
import Button from "@mui/material/Button";
import catLogo from "../assets/images/cats.png";
const TestetComponent: React.FC = () => {
  return (
    <div>
      <h1>歡迎、這是我的logo</h1>
      
      <img src={catLogo} alt="sheep" />
      <div>
        <Button variant="contained">Hello world</Button>
      </div>
    </div>
  );
};

export default TestetComponent;
