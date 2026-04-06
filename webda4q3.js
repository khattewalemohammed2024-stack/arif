import React, { useState } from "react";
import "./App.css";

function App() {
  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="container">
      <h1>Image Gallery</h1>

      {/* Large Image Preview */}
      <div className="preview">
        <img src={selectedImage} alt="Preview" />
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            onClick={() => setSelectedImage(img)}
            className={selectedImage === img ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
