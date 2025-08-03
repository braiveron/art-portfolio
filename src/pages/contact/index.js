import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Alert } from "react-bootstrap";
import { contactConfig, introdata, meta } from "../../content_option";
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          setFormdata({
            email: "",
            name: "",
            message: "",
            loading: false,
            alertmessage: t("alert_success"),
            variant: "success",
            show: true,
          });
        },
        (error) => {
          setFormdata({
            ...formData,
            loading: false,
            alertmessage: `${t("alert_error")}: ${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <div style={{ display: "flex", height: "100vh", flexDirection: "row" }}>
        {/* Columna izquierda: Imagen */}
        <div
          style={{
            width: "30%",
            height: "90%",
            backgroundImage: `url(${introdata.contact_img_url})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Columna derecha: Contenido */}
        <div
          style={{
            width: "70%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <Helmet>
              <meta charSet="utf-8" />
              <title>
                {" "}
                {t("meta.contact")} | {meta.title}
              </title>
              <meta name="description" content={meta.description} />
            </Helmet>

            <h1 className="display-4 mb-3">{t("contact.title")}</h1>

            {/* Datos de contacto */}
            <div className="mb-2">
              <p>
                <strong>{t("contact.email")}:</strong>{" "}
                <a
                  href={`mailto:${contactConfig.YOUR_EMAIL}`}
                  className="text-decoration-none ms-2"
                >
                  {contactConfig.YOUR_EMAIL}
                </a>
              </p>
              <p>
                <strong>{t("contact.whatsapp")}:</strong>{" "}
                <a
                  href={`https://wa.me/${contactConfig.YOUR_PHONE.replace(
                    /\D/g,
                    ""
                  )}?text=${encodeURIComponent(
                    "Hola! Me gustaría hablar sobre tu portfolio."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none ms-2"
                >
                  {contactConfig.YOUR_PHONE}
                </a>
              </p>
              <p>
                <strong>{t("contact.instagram")}:</strong>{" "}
                <a
                  href={`https://instagram.com/${contactConfig.YOUR_INSTAGRAM}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none ms-2"
                >
                  {contactConfig.YOUR_INSTAGRAM}
                </a>
              </p>
            </div>

            <p className="mb-3">{t("description")}</p>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row className="mb-2">
                <Col lg="6">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder={t("contact.form.name")}
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder={t("contact.form.email")}
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <textarea
                className="form-control mb-2"
                id="message"
                name="message"
                placeholder={t("contact.form.message")}
                rows="2"
                value={formData.message || ""}
                onChange={handleChange}
                required
              ></textarea>

              <Row>
                <Col lg="12">
                  <button className="btn ac_btn w-30" type="submit">
                    {formData.loading
                      ? t("contact.sending")
                      : t("contact.send")}
                  </button>
                </Col>
              </Row>
            </form>

            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert mt-3 ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ ...formData, show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};
