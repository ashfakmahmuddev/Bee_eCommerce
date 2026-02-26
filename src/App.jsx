import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Rootlayouts from "./components/layouts/Rootlayouts";
import { CircleChevronUp } from "lucide-react";
const Home = React.lazy(() => import("/src/components/pages/Home"));
const About = React.lazy(() => import("/src/components/pages/About"));
const Shop = React.lazy(() => import("/src/components/pages/Shop"));
const Blog = React.lazy(() => import("/src/components/pages/Blog"));
const Contact = React.lazy(() => import("/src/components/pages/Contact"));
const Error = React.lazy(() => import("/src/components/pages/Error"));

function App() {
  return (
    <div className="relative">
      <button
        className="fixed bottom-6 right-6 z-50 text-[#FFAE00] opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <CircleChevronUp size={45} strokeWidth={2} absoluteStrokeWidth />
      </button>
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
    </div>
  );
}

export default App;
