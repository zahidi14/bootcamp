import React, { useEffect, useState } from "react";
import {
  Badge,
  Container,
  Form,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({ selectedDate, handleDateChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      className="form-control datePick"
    />
  );
};

const Checkout = () => {
  const [check, setCheck] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getId();
  }, [id]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={6}>
            <h2>Informasi Pembayaran</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nama" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Masukkan email" />
              </Form.Group>

              <Form.Group controlId="formNumber">
                <Form.Label>No Hp</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nomor Hp" />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Alamat" />
              </Form.Group>

              <Form.Group controlId="formPayment">
                <Form.Label>Metode Pembayaran </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Pilih Metode Pembayaran</option>
                  <option value="1">Transfer Bank</option>
                  <option value="2">Dana</option>
                  <option value="3">Ovo</option>
                  <option value="3">LinKAja</option>
                  <option value="3">GoPay</option>
                  <option value="3">ShoppePay</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                controlId="formSchedule"
                className="mt-4 d-flex justify-content-between"
              >
                <Form.Label>Jadwal Pengambilan</Form.Label>
                <MyDatePicker
                  selectedDate={selectedDate}
                  handleDateChange={handleDateChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4">
                Lanjut Pembayaran
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <h2>Pesanan</h2>

            <div>
              <p>Merk {check.name}</p>
              <p>Type: {check.type}</p>
              <p>Kapasitas: {check.capacity}</p>
              <p>Harga: {check.price}</p>
            </div>

            <h3>Total Biaya: {check.price}</h3>

            {/* You can add a payment component or further checkout steps here */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
