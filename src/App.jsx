import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from '.pages/Home/Home.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

