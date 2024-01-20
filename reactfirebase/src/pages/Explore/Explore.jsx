import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import { CardCont } from "../../component";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../../redux/action";
import explPic from "../../assets/expl.png";

const Explore = () => {
  const dispatch = useDispatch();
  const { car, loading } = useSelector((state) => state.carReducer);
  const { darkMode } = useSelector((state) => state.themeReducer);
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

  const Spin = () => {
    return (
      <div className="spiner text-center">
        <h3>Loading</h3>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  };

  return (
    <div className={darkMode ? "light" : "dark"}>
      <div className="head text-center mt-4 mb-4">
        <img src={explPic} className="mb-4 img-fluid" />
        <h3>Mobil Tersedia</h3>
      </div>

      <Container>
        <Row>
          {" "}
          {loading ? (
            <Spin />
          ) : (
            car.map((i) => (
              <Col
                key={i.id}
                className="col-lg-4 col-md-6 col-sm-12 mr-4 mb-4 d-flex justify-content-center"
              >
                <Link to={`/checkout/${i.id}`}>
                  <CardCont
                    title={i.name}
                    price={i.price}
                    url={i.src}
                    capacity={i.capacity}
                    luggage={i.luggage}
                  />
                </Link>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Explore;
