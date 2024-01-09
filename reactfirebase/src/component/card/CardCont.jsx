import React from "react";
import { Card, Button } from "react-bootstrap";

const CardCont = ({ title, url, price, checkot }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary" onClick={checkot}>
          Checkout
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardCont;
