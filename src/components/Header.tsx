import React from 'react';
import NavBar from "./NavBar";
import imagePath from "../assets/images/sheep.jpg";
const Header: React.FC = () => {
  let items = ["作品集","經歷","關於我"];
  return (
    
    <div>
      
     <h1>這是header。</h1>
     
      
      <NavBar 
      brandName="Delask Dev Web" 
      imageSrcPath={imagePath} 
      navItems={items}/>
     
    </div>
  );
};

export default Header;

