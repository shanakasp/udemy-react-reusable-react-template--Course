import { useState } from "react";
import styles from "./header.module.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        React<span>Starter</span>.
      </div>
      <div
        className={`${styles["nav-links"]} ${
          isMobileMenuOpen ? styles.show : ""
        }`}
      >
        <a href="#home" className="active">
          Home
        </a>
        <a href="#dashboard">Dashboard</a>
      </div>
      <div className={styles["auth-buttons"]}>
        <a href="#login">Login</a>
        <a href="#register">Register</a>
        <button className={styles["get-started"]}>Get Started</button>
      </div>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Header;
