import React from "react";
import Header from "../../Components/Header/Header";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import Product from "../../Components/Product/Product";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <BannerSlider />
      <Product />
      <About />
      <Footer />
    </div>
  );
}
