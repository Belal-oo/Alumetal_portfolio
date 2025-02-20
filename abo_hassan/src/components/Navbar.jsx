import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
<<<<<<< HEAD
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("الرئيسية");

  return (
    <Main>
      <div className="logo">Abo~Hassan</div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["الرئيسية", "أعمالنا", "عنا", "تواصل معنا"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={active === item ? "active" : ""}
            onClick={() => {
              setActive(item);
              setMenuOpen(false);
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </Main>
  );
=======
  return <div className="Navbar">
    
  </div>;
>>>>>>> 258b776a53af0173eff702c27387b4e9a128acd0
};

export default Navbar;

const Main = styled.div`
  direction: rtl;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #222;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  .logo {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    position: relative;
    padding: 0.5rem;
    transition: 0.3s ease-in-out;
  }

  .nav-links a:hover,
  .nav-links .active {
    color: #ffcc00;
  }

  .menu-icon {
    display: none;
    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .nav-links {
      direction: rtl;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 20%;
      transform: translateX(-50%);
      width: 26%;
      background: #333;
      padding: 0.9rem;
      border-radius: 8px;
      text-align: center;
      transition: transform 0.3s ease-in-out;
      opacity: 0;
      visibility: hidden;
    }

    .nav-links.open {
      opacity: 1;
      visibility: visible;
    }

    .nav-links a {
      padding: 10px;
      width: 15%;
      display: block;
    }

    .menu-icon {
      display: block;
    }
  }
`;
