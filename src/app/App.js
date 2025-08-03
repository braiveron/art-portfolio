import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={8}
          outerSize={40}
          color="255,255,255"
          outerAlpha={0.15}
          innerScale={0.8}
          outerScale={5}
          trailingSpeed={7}
          innerStyle={{
            backgroundColor: "#ffffff", // blanco puro
            border: "none", // sin borde rojo
            filter: "blur(2px)",
            mixBlendMode: "difference",
          }}
          outerStyle={{
            border: "2px solid rgba(255,255,255,0.5)", // borde blanco semitransparente
            filter: "blur(4px)",
            mixBlendMode: "difference",
          }}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
