import Layout from './Layout';
import Home from './page/Home';
import Projects from './page/Projects';
import About from './page/About';
import Contact from './page/Contact';

import "./css/main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
