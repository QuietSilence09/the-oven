import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Home/Home.module.css";
import logo from "../../images/theovenlogo.png";
import halalLogo from "../../images/photo_2024-09-14_22-27-45-removebg-preview.png";
import { Squash as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <div>
        <img className={styles.halalLogo} alt="Logo" src={halalLogo} />
      </div>
      <div className={styles.hamburgerIcon}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      <nav className={`${styles.navMenu} ${isOpen ? styles.showMenu : ""}`}>
        <ul className={styles.navList}>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              to="/"
              className={styles.navLink}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              to="/menu"
              className={styles.navLink}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              to="/contact"
              className={styles.navLink}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
