import React from "react";
import Layout from "../components/layout";
import HomeSection from '../components/Sections/Home/index.jsx';
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";

export default () => {
  return (
    <Layout>
      <HomeSection />
      <Projects />
      <Contact />
    </Layout>
  )
}

