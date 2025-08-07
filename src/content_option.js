import ContactPic from "./assets/images/contactimg.png";
import ProfilePic from "./assets/images/brai.png";
import Proyecto1 from "./assets/images/proyecto1.jpg";
import Proyecto2 from "./assets/images/proyecto2.mp4";
import Proyecto3 from "./assets/images/proyecto3.jpg";
import Proyecto4 from "./assets/images/proyecto4.jpg";
import Proyecto5 from "./assets/images/proyecto5.mp4";
import Proyecto6 from "./assets/images/proyecto6.mp4";
import Slide1a from "./assets/images/slide1a.jpg";
import Slide1b from "./assets/images/slide1b.jpg";
import Slide1c from "./assets/images/slide1c.jpg";
import Slide2a from "./assets/images/slide2a.jpg";
import Slide2b from "./assets/images/slide2b.jpg";
import Slide2c from "./assets/images/slide2c.jpg";

const logotext = "BRAIAN";
const meta = {
  title: "Braian Veron",
};

const introdata = {
  title: "Soy Braian Veron",
  animated: {
    first: "Especializado en acrobacia aérea",
    second: "Experiencia en dúos y solos escénicos",
    third: "Con base en danza y entrenamiento corporal",
  },
  description:
    "Artista escénico con trayectoria internacional. Me desempeño principalmente en disciplinas aéreas, con un enfoque fuerte en pole aéreo y trapedance. Trabajo con precisión técnica, presencia escénica y versatilidad.",
  your_img_url: ProfilePic,
  contact_img_url: ContactPic,
};

const contactConfig = {
  YOUR_EMAIL: "braianveron88@gmail.com",
  YOUR_PHONE: "(55) 21 98126 7514",
  YOUR_INSTAGRAM: "brai.veron",
  description:
    "Disponible para integrar shows, espectáculos y producciones artísticas. Si buscás compromiso y presencia escénica, no dudes en contactarme.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_0p7r3cz",
  YOUR_TEMPLATE_ID: "template_oa8q3hd",
  YOUR_USER_ID: "WkknylIeDfRNqZ10r",
};

const socialprofils = {
  instagram: "https://instagram.com/brai.veron",
};

const portfolioData = [
  // 🟩 FILA 1: dos imágenes apiladas verticalmente + video
  {
    group: true,
    position: "left",
    size: "large",
    layout: "vertical",
    items: [
      {
        type: "image",
        title: "Imagen 1",
        description: "Descripción imagen 1",
        src: Proyecto1,
        key: "img1",
      },
      {
        type: "image",
        title: "Imagen 2",
        description: "Descripción imagen 2",
        src: Proyecto3,
        key: "img2",
      },
    ],
  },
  {
    type: "video",
    src: Proyecto2,
    title: "Video",
    description: "Video vertical",
    size: "large",
    position: "right",
    key: "video",
  },

  // 🟦 FILA 2: dos carruseles alineados horizontalmente + una imagen
  {
    group: true,
    position: "left",
    size: "large",
    layout: "horizontal",
    items: [
      {
        type: "carousel",
        title: "Carrusel 1",
        description: "Primera galería",
        delay: 1100,
        key: "carousel1",
        slides: [
          { type: "image", src: Slide1a },
          { type: "image", src: Slide1b },
          { type: "image", src: Slide1c },
        ],
      },
      {
        type: "carousel",
        title: "Carrusel 2",
        description: "Segunda galería",
        delay: 1700,
        key: "carousel2",
        slides: [
          { type: "image", src: Slide2a },
          { type: "image", src: Slide2b },
          { type: "image", src: Slide2c },
        ],
      },
    ],
  },
  {
    type: "image",
    title: "Proyecto Estático",
    description: "Una imagen destacada acompañando los carruseles.",
    src: Proyecto4,
    size: "large",
    position: "right",
    key: "img3",
  },

  // 🟥 FILA 3: cuatro imágenes alineadas horizontalmente (25% cada una)
  {
    group: true,
    position: "left",
    size: "large",
    layout: "horizontal two-columns", // 🔁 cambiamos el layout
    fullWidth: true,
    items: [
      {
        type: "video",
        title: "Video A",
        description: "Descripción A",
        src: Proyecto6,
        key: "vid1",
      },
      {
        type: "video",
        title: "Video B",
        description: "Descripción B",
        src: Proyecto5,
        key: "vid2",
      },
    ],
  },

  {
    type: "textBlock",
    fullWidth: true,
    size: "large",
    position: "left",
    content: {
      title: "download.title",
      description: "download.description",
      buttonLabel: "download.buttonLabel",
      fileUrlEn: "/portfolio-braian-veron-ingles.pdf",
      fileUrlEs: "/portfolio-braian-veron-espanol.pdf",
    },
  },
];

export {
  meta,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  portfolioData,
};
