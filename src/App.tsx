import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScrollTop from "./component/ScrollTop";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import AboutPage from "./pages/AboutPages";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
