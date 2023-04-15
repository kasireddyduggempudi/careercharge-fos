import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import HomePage from './components/homepage/HomePage';
import { Row, Container, Col } from 'react-bootstrap';
import AboutUs from './components/aboutus/AboutUs';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutUs />
      {/* <Container style={{backgroundColor: 'blue'}}>
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 1, order: 1 }} style={{backgroundColor: 'red'}}> First col </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 1, order: 2 }}> Second col </Col>
        </Row>
    </Container><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <Container style={{backgroundColor: 'blue'}}>
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 1, order: 1 }} style={{backgroundColor: 'red'}}> First col </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 1, order: 2 }}> Second col </Col>
        </Row>
    </Container>
    <Container style={{backgroundColor: 'blue'}}>
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 1, order: 1 }} style={{backgroundColor: 'red'}}> First col </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 1, order: 2 }}> Second col </Col>
        </Row>
    </Container>
    <Container style={{backgroundColor: 'blue'}}>
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 1, order: 1 }} style={{backgroundColor: 'red'}}> First col </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 1, order: 2 }}> Second col </Col>
        </Row>
    </Container> */}
    </div>
  );
}

export default App;
