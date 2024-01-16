import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./card.scss";

const CardCont = ({ title, url, price, capacity, luggage }) => {
  return (
    <Card style={{ width: "18rem" }} className="cardCont">
      <Card.Img variant="top" src={url} />
      <Card.Body className="cardBody">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush cenet">
        <ListGroup.Item>Capacity : {capacity}</ListGroup.Item>
        <ListGroup.Item>Luggage : {luggage}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardCont;
