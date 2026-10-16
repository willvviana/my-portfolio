import type { ComponentType } from "react";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  const page = window.location.pathname.replace(/\/$/, "") || "/";

  const pages: Record<string, ComponentType> = {
    "/": Home,
    "/home": Home,
    "/about": About,
    "/projects": Projects,
    "/experience": Experience,
    "/contact": Contact,
  };
  const CurrentPage = pages[page] ?? Home;

  return (
    <>
      <Header />

      <main>
        <CurrentPage />
      </main>

      <Footer />
    </>
  );
}

export default App;
