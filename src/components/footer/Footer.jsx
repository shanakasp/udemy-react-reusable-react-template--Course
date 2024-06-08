import styles from "./footer.module.scss";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
            <li>
              <a href="#register">Register</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Social Media</h4>
          <ul>
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
            <li>
              <a href="#instagram">Instagram</a>
            </li>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Contact Us</h4>
          <ul>
            <li>Email: support@example.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {date} All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
