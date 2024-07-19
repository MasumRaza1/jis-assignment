import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Services1 from "../Components/Services1";
import CalltoAction from "../Components/CalltoAction";
import CaseStudies from "../Components/CaseStudies";
import CompanyLogo from "../Components/CompanyLogo";
import Testimonials from "../Components/Testimonials";
import Expertise from "../Components/Expertise";
import OurServices from "../Components/OurServices";
import Aboutus from "../Components/Aboutus";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <div class="m-application theme--light transition-page" id="app">
        <div class="m-content ocean-blue-var" id="main-wrap">
         
          <Aboutus />
          <Services1 />
          <OurServices />
          <Expertise />
          <Testimonials />
          <CompanyLogo />
          <CaseStudies />
          <CalltoAction />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
