import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./notfound.module.scss";

const NotFound = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { name2 } = useSelector((state) => state.data);
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
          <p>{name2}</p>
          <Link to={"/"}>
            <button>Back to Home Page</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NotFound;
