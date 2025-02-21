import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/kitchen-types-c-ar-10092021-2-640x400.jpg";
import styled from "styled-components";
import OurServices from "../our services/ourServices";

const Home = () => {
  let samples = ["افضل الخامات","اجود انواع القطاعات", "سرعة فى التنفيذ"]
  return (
    <HomeContainer>
      <Navbar />
      <div className="hero" id="الرئيسية">
        <img src={bg} alt="" className="bg-image" />
        <div className="overlay">
          <h1 className="title">شركه أبو حسن لأعمال الالوميتال</h1>
          <p className="pOfTitle">{samples[Math.floor(Math.random() * (2 - 0 + 1)) + 0]}</p>
          <a href={`#عنا`} className="button">
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
    width: 100%;
    // height: 92vh;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding-bottom: 60px;
    }

  .bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    padding: 3rem;
    border-radius: 10px;
    text-align: center;
    color: white;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    margin: 1rem 0;
    color: #ffcc00;
  }
  .pOfTitle{
  font-size:25px;
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
