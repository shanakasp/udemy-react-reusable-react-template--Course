import styles from "./home.module.scss";

function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.hero}>
        <img
          src="https://via.placeholder.com/1500x500"
          alt="Hero"
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1>Welcome to HomePage</h1>
          <p>Your journey to Home Page!</p>
        </div>
      </div>
      <div className={styles.content}>
        <h2>About Us</h2>
        <p>Hikz</p>
        <h2>Features</h2>
        <ul>
          <li>Easy to follow friends</li>
          <li>Real-world profile</li>
          <li>Community help</li>
          <li>Regular products</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
