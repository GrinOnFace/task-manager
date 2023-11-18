import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles/App.css"
import Projects from "./pages/Projects";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/main" element={<Main/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
