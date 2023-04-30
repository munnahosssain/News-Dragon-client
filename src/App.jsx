import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "./Pages/Shared/RightNav/RightNav";
import LeftNav from "./Pages/Shared/LeftNav/LeftNav";
import NavigationBar from "./Pages/Shared/NavigationBar/NavigationBar";

function App() {
  return (
    <Container>
      <Header />
      <NavigationBar />
      <Row>
        <Col lg={3}>
          <LeftNav />
        </Col>
        <Col lg={6}>
          <Outlet />
        </Col>
        <Col lg={3}>
          <RightNav />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
