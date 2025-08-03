import React from "react";
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import about3 from "../../assets/images/about3.jpg";
import about4 from "../../assets/images/about4.jpg";
import about5 from "../../assets/images/about5.jpg";
import about6 from "../../assets/images/about6.jpg";
import about7 from "../../assets/images/about7.jpg";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import "./style.css";

export const About = () => {
  const { t } = useTranslation();

  const imageList = [about1, about2, about3, about4, about5, about6, about7];

  return (
    <HelmetProvider>
      <section id="about" className="about">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {t("meta.about")} | {meta.title}
          </title>
        </Helmet>

        <Container fluid className="py-5">
          <Row className="align-items-center">
            {/* CARRUSEL DE IMÁGENES */}
            <Col md={7} className="mb-4 mb-md-0">
              <Carousel fade interval={2000}>
                {imageList.map((src, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={src}
                      alt={`about-slide-${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>

            {/* TEXTO SOBRE MÍ */}
            <Col md={5}>
              <h2 className="mb-3">{t("about.title")}</h2>
              {t("about.description")
                .split("\n\n")
                .map((paragraph, index, array) => (
                  <p key={index}>
                    {index === array.length - 1 ? (
                      <em>
                        <strong>{paragraph}</strong>
                      </em>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              <ul>
                <li>🎯 {t("about.skill1")}</li>
                <li>🌀 {t("about.skill2")}</li>
                <li>🎭 {t("about.skill3")}</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </HelmetProvider>
  );
};
