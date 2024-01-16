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
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={gclass} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={mercy} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caraousel;
