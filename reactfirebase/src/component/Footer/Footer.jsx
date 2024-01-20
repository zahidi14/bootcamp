import React from "react";
import "./footer.scss";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import ig from "../../assets/ig.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="footer p-4">
      <Container className="foot">
        <Row>
          <Col xs={12} md={4}>
            <h3>Sewa Mobil</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              dui nec massa enim scelerisque scelerisque maecenas lectus.
              Tincidunt posuere nunc at amet, in. Enim ullamcorper lectus
              viverra donec. At faucibus nunc vel viverra massa malesuada leo
              iaculis tellus.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Informasi lebih lanjut? Hubungi Kami</h3>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Pesan</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Button>Send</Button>
              </Form>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <h3>Informasi Kontak </h3>
            <ListGroup>
              <ListGroup.Item>
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <span> Jl. Raya no 99</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon="fa-brands fa-twitter" />{" "}
                <span> Sewa Mobil</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon="fa-solid fa-phone" />
                <span> +628123987654</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                <span> +628789456321</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon="fa-brands fa-instagram" />{" "}
                <span> Sewa Mobil</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
