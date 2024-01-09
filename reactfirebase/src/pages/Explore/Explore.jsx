import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { CardCont } from "../../component";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../../redux/action";

const Explore = () => {
  const dispatch = useDispatch();
  const { car } = useSelector((state) => state.carReducer);

  useEffect(() => {
    dispatch(fetchCar());
  }, [dispatch]);

  // const get = () => {
  //   axios
  //     .get("https://my-json-server.typicode.com/zahidi14/bootcamp/car")
  //     .then((result) => {
  //       setCar(result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  console.log({ ccacr: car });
  const intoCheckout = (id) => {
    console.log(id);
  };

  return (
    <Container>
      <Row>
        {car.map((i) => (
          <Col key={i.id} className="col-lg-4 col-md-6 col-sm-12 mr-4 mb-4">
            <Link to={`/checkout/${i.id}`}>
              <CardCont
                title={i.name}
                price={i.price}
                checkot={() => intoCheckout(i.id)}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Explore;
