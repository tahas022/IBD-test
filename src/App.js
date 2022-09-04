import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutIBD from "./pages/AboutIBD";
import Projects from "./pages/Projects";
import OurServices from "./pages/OurServices";
import Cportfolio from "./pages/Cportfolio";
import Cphilosophy from "./pages/Cphilosophy";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutIBD" element={<AboutIBD />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Services" element={<OurServices />} />
          <Route path="/Portfolio" element={<Cportfolio />} />
          <Route path="/Philosophy" element={<Cphilosophy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
  // let Component;
  // switch (window.location.pathname) {
  //   case "/IBDCbetaSite/":
  //     Component = Home;
  //     break;
  //   case "/AboutIBD":
  //     Component = AboutIBD;
  //     break;
  //   case "/Projects":
  //     Component = Projects;
  //     break;
  //   case "/Services":
  //     Component = OurServices;
  //     break;
  //   case "/Philosophy":
  //     Component = Cphilosophy;
  //     break;
  //   case "/Portfolio":
  //     Component = Cportfolio;
  // }
  // return (
  //   <div>
  //     <NavBar />
  //     <Component />
  //   </div>
  // );
}

export default App;
