import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScrollTop from "./component/ScrollTop";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
