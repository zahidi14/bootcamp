import React from "react";
import { Carousel } from "react-bootstrap";
import backg from "../../assets/hero1.png";
import gclass from "../../assets/hero2.png";
import mercy from "../../assets/hero3.png";
import "./caraousel.scss";

const ExampleCarouselImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="carus" />;
};

const Caraousel = () => {
  return (
    <div className="home mb-4 position-static">
      <Carousel className="carusel mb-4">
        <Carousel.Item>
          <ExampleCarouselImage src={backg} />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={gclass} />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={mercy} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caraousel;
