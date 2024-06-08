import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./notfound.module.scss";

const NotFound = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles["not-found-container"]}>
      {isLoading ? (
        <div className={styles["loading-circle"]} />
      ) : (
        <div className={styles["not-found-content"]}>
          <div className="icon-container"></div>
          <h2>Oops! Page Not Found</h2>
          <p>Sorry, but the page you are looking for does not exist.</p>
          <Link to={"/"}>
            <button>Back to Home Page</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NotFound;
