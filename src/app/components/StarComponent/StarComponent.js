import React, { useEffect } from "react";
import "./StarComponent.module.css";

const StarComponent = () => {
  useEffect(() => {
    const starContainer = document.getElementById("star-container");
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <div id="star-container">
      
    </div>
  );
};
console.log('Star component is being rendered');
export default StarComponent;
