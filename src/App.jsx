import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Details />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
