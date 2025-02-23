import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Slider from "../components/slider";

const Home = () => {
  let samples = ["افضل الخامات", "اجود انواع القطاعات", "سرعة فى التنفيذ"];
  return (
    <HomeContainer>
      <Navbar />
      <div className="hero" id="الرئيسية">
        <Slider />
        <div className="overlay">
          <h1 className="title">شركه الاتحاد لأعمال الالوميتال</h1>
          <p className="pOfTitle">
            {samples[Math.floor(Math.random() * samples.length)]}
          </p>
          <a href={`#من نحن`} className="button">
            من نحن ؟
          </a>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  .hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.692);
    padding: 3rem;
    border-radius: 10px;
    text-align: center;
    color: white;
    z-index: 10;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    margin: 1rem 0;
    color: #ffcc00;
  }

  .pOfTitle {
    font-size: 25px;
  }

  .button {
    background: #ffcc00;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    transition: 0.3s;
  }

  .button:hover {
    background: #e6b800;
  }
`;
