// TestetComponent.tsx
import * as React from "react";
import Button from "@mui/material/Button";

const TestetComponent: React.FC = () => {
  return (
    <div>
      <h1>歡迎使用React和Vite</h1>
      <p>這是一個簡單的範例，渲染文字和圖片。</p>
      <img src="/path/to/your/image.jpg" alt="示例圖片" />
      <div>
        <Button variant="contained">Hello world</Button>
      </div>
    </div>
  );
};

export default TestetComponent;
