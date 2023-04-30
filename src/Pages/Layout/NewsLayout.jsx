import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import { Outlet } from "react-router-dom";
import RightNav from "../Shared/RightNav/RightNav";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const NewsLayout = () => {
  return (
    <Container>
      <Header />
      <NavigationBar />
      <Row>
        <Col lg={9}>
          <Outlet />
        </Col>
        <Col lg={3}>
          <RightNav />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default NewsLayout;
