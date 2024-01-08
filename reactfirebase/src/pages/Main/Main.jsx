import React from "react";
import bg from "../../assets/Aboutimage.png";
import star from "../../assets/statr.png";
import man from "../../assets/man.png";
import diamond from "../../assets/Vector.png";
import test from "../../assets/rud.png";
import "../../style.scss";
import { Button, Col, Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <Container className="container-fluid">
        <Row>
          <Col></Col>
          <Col>
            <h1>
              Embark on Unforgettable Journeys with Our Premier Tour and Travel
              Services
            </h1>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <img src={bg} alt="" className="fluid " />
          </Col>
          <Col className="text-center">
            <h2>Ordinary Best tour nad Travel Service</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra
              eu ut scelerisque. Erat orci scelerisque adipiscing potenti
              sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas
              aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu
              orci enim est egestas fusce cras. Purus diam est vitae faucibus
              enim. Ultricies nunc vel magnis gravida quis sodales. Lacus, elit
              pellentesque massa odio. Sed dictumst condimentum sit quis
            </p>
            <Button type="button" className="btn btn-primary">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="max bg-dark text-light container-fluid">
        <Row className="pt-4 text-center">
          <h2>Services</h2>
        </Row>
        <Row className=" p-4 d-flex flex-wrap">
          <Col className="text-center " xs={12} md={4}>
            <img src={man} alt="" />
            <h3>Lorem ipsum dolor</h3>
            <p>
              consectetur adipiscing elit. Interdum parturient laoreet nibh
              vitae in duis eu vel. Sagittis eget volutpat ac quisque tristique
              scelerisque proin. Vel nec ac ultrices mi viverra viverra. Mi,
              arcu sem nec risus cursus ipsum leo. Eget erat tincidunt ri
            </p>
          </Col>
          <Col className="text-center" xs={12} md={4}>
            <img src={diamond} alt="" />
            <h3>Lorem ipsum dolor</h3>
            <p>
              consectetur adipiscing elit. Interdum parturient laoreet nibh
              vitae in duis eu vel. Sagittis eget volutpat ac quisque tristique
              scelerisque proin. Vel nec ac ultrices mi viverra viverra. Mi,
              arcu sem nec risus cursus ipsum leo. Eget erat tincidunt ri
            </p>
          </Col>
          <Col className="text-center" xs={12} md={4}>
            <img src={star} alt="" />
            <h3>Lorem ipsum dolor</h3>
            <p>
              consectetur adipiscing elit. Interdum parturient laoreet nibh
              vitae in duis eu vel. Sagittis eget volutpat ac quisque tristique
              scelerisque proin. Vel nec ac ultrices mi viverra viverra. Mi,
              arcu sem nec risus cursus ipsum leo. Eget erat tincidunt ri
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="container-fluid max pt-4 pb-4 yellow">
        <Row className="text-center center-flex">
          <h2>Testimonials</h2>
          <div className="card">
            <Col>
              <img src={test} alt="" />
              <h3>Annie Rudy</h3>
            </Col>
            <Col>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                dui nec massa enim scelerisque scelerisque maecenas lectus.
                Tincidunt posuere nunc at amet, in. Enim ullamcorper lectus
                viverra donec. At faucibus nunc vel viverra massa malesuada leo
                iaculis tellus.
              </p>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Main;
