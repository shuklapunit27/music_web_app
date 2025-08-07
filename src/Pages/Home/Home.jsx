import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/assets/hero_title.png";
import play_icon from "../../assets/assets/play_icon.png";
import info_icon from "../../assets/assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
const Home = () => {
  return (
    <div>
      <div className="home">
        <Navbar />
        <div className="hero">
          <img src={hero_banner} alt="" className="banner-img" />
          <div className="hero-caption">
            <img src={hero_title} alt="" className="caption-img" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              ad placeat illo cum dignissimos recusandae nulla? Maiores illo
              recusandae optio, ad officiis velit laborum nostrum.
            </p>
            <div className="hero-btns">
              <button className="btn">
                <img src={play_icon} alt="" />
                Play
              </button>
              <button className="btn dark-btn">
                <img src={info_icon} alt="" />
                More info
              </button>
            </div>
            <TitleCards />
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Only for you"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
