import {
  faSpotify,
  faYoutube,
  faAmazon,
  faDeezer,
  faItunesNote,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

export default function Release(props: { release: Release }) {
  const release = props.release;

  return (
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
