import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Development from "./components/Development";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Development />
        <Expertise />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;