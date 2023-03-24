import {
  faAmazon,
  faDeezer,
  faItunesNote,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import Slider, { Settings as SliderSettings } from "react-slick";
import "../styles/App.scss";
import "../styles/index.scss";

export interface Release {
  name: string;
  cover: string;
  text?: string;
  links: {
    spotify?: string;
    youtube?: string;
    apple?: string;
    deezer?: string;
    amazon?: string;
  };
}

function App() {
  const releases: Release[] = [
    {
      name: "Demon Blood",
      cover: "demonblood.png",
      links: {
        spotify: "https://open.spotify.com/track/33NkHAKFtm2b2wyLNuIGA5",
        youtube: "https://youtu.be/2perPONe6Sw",
        apple: "https://music.apple.com/de/album/demon-blood/1662006519",
        amazon: "https://music.amazon.de/albums/B0BRBSMFKV",
        deezer: "https://deezer.page.link/tfX4huXLfBpsyvF48",
      },
    },
    {
      name: "Demon Blood, Pt. 2",
      cover: "demonblood2.png",
      links: {
        spotify: "https://open.spotify.com/track/3iZJCsEOmBcGEEAefRhZLn",
        youtube: "https://youtu.be/p8esKpKl9A4",
        amazon: "https://music.amazon.de/albums/B0BS9ZSLP6",
        apple: "https://music.apple.com/de/album/demon-blood-pt-2/1665245353",
        deezer: "https://deezer.page.link/rcQsWGF4pgMyxAUJ6",
      },
    },
    {
      name: "Demon Blood, Pt. 3",
      cover: "demonblood3.png",
      links: {
        spotify: "https://open.spotify.com/track/6rX3wtVpFV608rE7RcsrUh",
        youtube: "https://youtu.be/YKf6HUzpC5k",
        amazon: "https://music.amazon.de/albums/B0BZ93P2YV",
        apple: "https://music.apple.com/de/album/demon-blood-pt-3/",
        deezer: "https://deezer.page.link/fG5h5qnFmYguux6d7",
      },
    },
  ];

  function computeReleases(): JSX.Element[] {
    let array: JSX.Element[] = [];
    for (const release of releases) {
      array.push(
        <Card className="bg-dark text-light p-2 border-start border-end rounded-0 border-secondary">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/img/cover_" + release.cover}
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold mb-3">
              {release.name}
            </Card.Title>
            {release.text ? <Card.Text>{release.text}</Card.Text> : <></>}
            <Row className="flex-nowrap text-center p-0">
              <Col className="p-0">
                {release.links.spotify ? (
                  <Button
                    className="p-2"
                    variant="spotify"
                    as="a"
                    href={release.links.spotify}
                  >
                    <FontAwesomeIcon size="2x" icon={faSpotify} />
                  </Button>
                ) : (
                  <></>
                )}
              </Col>
              <Col className="p-0">
                {release.links.youtube ? (
                  <Button
                    className="p-2"
                    variant="danger"
                    as="a"
                    href={release.links.youtube}
                  >
                    <FontAwesomeIcon size="2x" icon={faYoutube} />
                  </Button>
                ) : (
                  <></>
                )}
              </Col>
              <Col className="p-0">
                {release.links.amazon ? (
                  <Button
                    className="p-2"
                    variant="amazon"
                    as="a"
                    href={release.links.amazon}
                  >
                    <FontAwesomeIcon size="2x" icon={faAmazon} />
                  </Button>
                ) : (
                  <></>
                )}
              </Col>
              <Col className="p-0">
                {release.links.deezer ? (
                  <Button
                    className="p-2"
                    variant="deezer"
                    as="a"
                    href={release.links.deezer}
                  >
                    <FontAwesomeIcon size="2x" icon={faDeezer} />
                  </Button>
                ) : (
                  <></>
                )}
              </Col>

              <Col className="p-0">
                {release.links.apple ? (
                  <Button
                    className="p-2"
                    variant="applemusic"
                    as="a"
                    href={release.links.apple}
                  >
                    <FontAwesomeIcon size="2x" icon={faItunesNote} />
                  </Button>
                ) : (
                  <></>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      );
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
        <Row className="HeaderOuter">
          <Container className="Header bg-black text-light py-3">
            <Row>
              <Col />
              <Col className="text-center">XAN TONED</Col>
              <Col className="text-end">
                <FontAwesomeIcon icon={faBars} size="lg" />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="MainOuter flex-shrink-0 bg-dark text-light pb-2">
          <Container className="Main">
            <Container className="Title my-3 text-center">
              <p className="fw-bold" style={{ fontSize: "50px" }}>
                XAN TONED
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
