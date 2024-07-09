import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledShowcase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;

  .image-container {
    margin: 0 10px;
    transform-origin: center;
  }

  .image-container:nth-child(1) {
    transform: rotate(-10deg);
  }
  .image-container:nth-child(2) {
    transform: rotate(5deg);
  }
  .image-container:nth-child(3) {
    transform: rotate(-5deg);
  }
  .image-container:nth-child(4) {
    transform: rotate(10deg);
  }
  .image-container:nth-child(5) {
    transform: rotate(-7deg);
  }
`;

const Showcase = () => {
  return (
    <StyledShowcase>
      <div className="image-container">
        <Image src="/path/to/image1.jpg" alt="Image 1" width={300} height={300} />
      </div>
      <div className="image-container">
        <Image src="/path/to/image2.jpg" alt="Image 2" width={300} height={300} />
      </div>
      <div className="image-container">
        <Image src="/path/to/image3.jpg" alt="Image 3" width={300} height={300} />
      </div>
      <div className="image-container">
        <Image src="/path/to/image4.jpg" alt="Image 4" width={300} height={300} />
      </div>
      <div className="image-container">
        <Image src="/path/to/image5.jpg" alt="Image 5" width={300} height={300} />
      </div>
    </StyledShowcase>
  );
};

export default Showcase;
