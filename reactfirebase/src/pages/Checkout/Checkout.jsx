import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const [check, setCheck] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getId();
  }, [id]);

  const getId = () => {
    axios
      .get(`https://my-json-server.typicode.com/zahidi14/bootcamp/car/${id}`)
      .then((result) => {
        setCheck(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log({ check: check });

  return (
    <Container>
      <Row>{check.name}</Row>
    </Container>
  );
};

export default Checkout;
