import { FaUserCircle } from "react-icons/fa";
import Card from "../../components/card/Card";
import styles from "./loginForm.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.pageContainer}>
      <Card cardClass={styles.loginCard}>
        <div className={styles.iconContainer}>
          <FaUserCircle size={50} color="#007bff" /> <h2>Login</h2>
        </div>

        <form>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className={styles.formActions}>
            <button type="submit">Login</button>
          </div>
          <div className={styles.forgotPassword}>
            <a href="#forgot-password">Forgot Password?</a>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
