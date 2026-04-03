import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Rootlayouts from "./components/layouts/Rootlayouts";
import { CircleChevronUp } from "lucide-react";
// import LenisProvider from "/src/components/providers/LenisProvider.jsx";
import clsx from "clsx";
import LenisProvider from "./components/providers/LenisProvider";
import { HelmetProvider } from "react-helmet-async";

// Lazy Loading Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const About = React.lazy(() => import("./components/pages/About"));
const Shop = React.lazy(() => import("./components/pages/Shop"));
const Blog = React.lazy(() => import("./components/pages/Blog"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Error = React.lazy(() => import("./components/pages/Error"));

function App() {
  const [show, setShow] = useState(false);

  // Back to Top Button Visibility
  useEffect(() => {
    const toggle = () => setShow(window.scrollY > 300);
    toggle();
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <HelmetProvider>
    <div className="relative font-Roboto">
      {/* Back to Top Button */}
      <button
        className={clsx(
          "fixed bottom-6 right-6 z-50 text-[#FFAE00] transition-all duration-300",
          show
            ? "opacity-70 hover:opacity-100 hover:scale-110 cursor-pointer"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <CircleChevronUp size={45} strokeWidth={2} absoluteStrokeWidth />
      </button>

      {/* Lenis Smooth Scroll Provider */}
      <LenisProvider>
        <Routes>
          <Route path="/" element={<Rootlayouts />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </LenisProvider>
    </div>
    </HelmetProvider>
  );
}

export default App;