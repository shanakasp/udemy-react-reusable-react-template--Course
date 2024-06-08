import React from "react";
import Card from "../../components/card/Card";
// import styles from "./registerForm.module.scss";

const RegisterForm = () => {
  return (
    <Card cardClass={styles.registerCard}>
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-actions">
          <button type="submit">Register</button>
        </div>
      </form>
    </Card>
  );
};

export default RegisterForm;
