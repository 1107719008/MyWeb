import React from "react";
import Button from "@mui/material/Button";
import catLogo from "../assets/images/cats.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
const HomePage: React.FC = () => {
  return (
    <div>
      <h1>歡迎、這是Home page</h1>
      <img src={catLogo} alt="sheep" />
      <div>
        <Button variant="contained">Home</Button>
      </div>
        <Header />
        
        <Footer />
    </div>
  );
};

export default HomePage;