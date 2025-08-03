import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../../content_option";
import { meta } from "../../content_option";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "./style.css";

// ...imports iguales

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <section className="portfolio-section">
        <Helmet>
          <title>
            {t("meta.portfolio")} | {meta.title}
          </title>
        </Helmet>

        <h2 className="section-title">{t("portfolio.title")}</h2>
        <p className="section-description">
          {t("portfolio.description.part1")}
          <br />
          {t("portfolio.description.part2")}
        </p>

        <div className="portfolio-grid">
          {portfolioData.map((item, index) => {
            const layoutClass = item.group
              ? item.layout?.includes("vertical")
                ? "vertical"
                : item.layout?.includes("horizontal")
                ? "horizontal"
                : ""
              : "";

            const isFourColumnScroll =
              item.layout === "horizontal four-columns-scroll";

            return (
              <div
                className={`portfolio-item ${item.size}`}
                key={index}
                style={{
                  gridColumn: item.fullWidth
                    ? "1 / -1"
                    : item.position === "right"
                    ? "2 / 3"
                    : "1 / 2",
                }}
              >
                {item.group && isFourColumnScroll ? (
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={"auto"}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                    }}
                    speed={4000}
                    loop
                    freeMode
                    modules={[Autoplay]}
                    className="four-column-scroll"
                  >
                    {item.items.map((subitem, i) => (
                      <SwiperSlide
                        key={i}
                        style={{ width: "25%", flexShrink: 0 }}
                      >
                        <img src={subitem.src} alt="" loading="lazy" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : item.group ? (
                  <div
                    className={`group-container ${layoutClass} ${item.layout
                      ?.split(" ")
                      .join("-")}`}
                  >
                    {item.items.map((subitem, i) => (
                      <div className="group-item" key={i}>
                        {subitem.type === "carousel" ? (
                          <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            loop
                            autoplay={{
                              delay: subitem.delay || 3000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                          >
                            {subitem.slides.map((slide, idx) => (
                              <SwiperSlide key={idx}>
                                {slide.type === "image" ? (
                                  <img src={slide.src} alt="" loading="lazy" />
                                ) : (
                                  <video
                                    src={slide.src}
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                    preload="none"
                                    className="portfolio-video"
                                  />
                                )}
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        ) : subitem.type === "image" ? (
                          <img src={subitem.src} alt="" loading="lazy" />
                        ) : (
                          <video
                            src={subitem.src}
                            muted
                            autoPlay
                            loop
                            playsInline
                            preload="none"
                            className={
                              item.layout === "horizontal two-columns"
                                ? ""
                                : "portfolio-video"
                            }
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ) : item.type === "textBlock" ? (
                  <div className="portfolio-callout">
                    <h3>{t("portfolio.download.title")}</h3>
                    <p>{t("portfolio.download.description")}</p>
                    <a
                      href={item.content.fileUrl}
                      download
                      className="download-button"
                    >
                      {t("portfolio.download.button")}
                    </a>
                  </div>
                ) : item.type === "image" ? (
                  <img src={item.src} alt="" loading="lazy" />
                ) : (
                  <video
                    src={item.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="none"
                    className="portfolio-video"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </HelmetProvider>
  );
};
