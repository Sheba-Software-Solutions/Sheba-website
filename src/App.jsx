import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog/Blog";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* Future routes can be added here */}
          {/* <Route path="/article/:id" element={<ArticlePage />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  </BrowserRouter>
);

export default App;