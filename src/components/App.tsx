import {
  faBars,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slider, { Settings as SliderSettings } from "react-slick";
import releases from "../data/releases";
import "../styles/App.scss";
import "../styles/index.scss";
import Release from "./Release";

function App() {
  function computeReleases(): JSX.Element[] {
    let array: JSX.Element[] = [];
    for (const release of releases) {
      array.push(<Release release={release} key={release.name} />);
    }
    return array;
  }

  const slider_settings: SliderSettings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    lazyLoad: "ondemand",
    speed: 300,
    dotsClass: "text-light slick-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    nextArrow: (
      <FontAwesomeIcon icon={faArrowRight} size="2x"></FontAwesomeIcon>
    ),
    prevArrow: <FontAwesomeIcon icon={faArrowLeft} size="2x"></FontAwesomeIcon>,
  };

  return (
    <div className="bg-dark h-100">
      <Container fluid className="App d-flex flex-column h-100">
        <Row className="HeaderOuter fixed-top">
          <Container className="Header bg-black text-light py-3">
            <Row>
              <Col />
              <Col className="text-center">XANTONED</Col>
              <Col className="text-end">
                <FontAwesomeIcon className="me-4" icon={faBars} size="lg" />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="MainOuter flex-shrink-0 bg-dark text-light pb-2 pt-5">
          <Container className="Main">
            <Container className="Title my-3 text-center">
              <p className="fw-bold" style={{ fontSize: "50px" }}>
                XANTONED
              </p>
              <p className="fs-3">Guten moiregen</p>
            </Container>
            <hr className="border border-light border-2" />
            <Container className="ReleasesTitle">
              <p className="fs-1">Releases</p>
            </Container>
            <Container className="Releases">
              <Slider
                {...slider_settings}
                className="border-secondary border border-2 rounded-3"
              >
                {computeReleases()}
              </Slider>
            </Container>
          </Container>
        </Row>
        <Row className="FooterOuter mt-auto">
          <Container className="Footer mt-auto bg-black text-muted text-center py-3">
            <span>Copyright &copy; 2023 XAN Toned</span>
          </Container>
        </Row>
      </Container>
    </div>
  );
}

export default App;
