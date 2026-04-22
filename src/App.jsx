import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

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
