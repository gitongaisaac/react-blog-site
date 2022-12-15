/* Dependancies and component imports */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/create" element={<Create />} />

            <Route path="/edit/:id" element={<Edit />} />

            <Route path="/about" element={<About />} />

            <Route path="/blogs/:id" element={<Details />} />

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
