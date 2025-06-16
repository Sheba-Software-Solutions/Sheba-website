import Home from "./pages/Home";
import { BrowserRouter, Routes , Route } from "react-router";
import Blog from "./pages/Blog/Blog";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog/>}></Route>
          {/* <Route path="/article/:id" element={<ArticlePage />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  </BrowserRouter>
);

export default App;