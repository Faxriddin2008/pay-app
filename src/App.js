import React from "react";
import styles from "./utils/style";
import { Home, Navbar } from "./components";
import Statistics from "./components/statistics";
import { statistics } from "./utils/constants";
const App = () => {
  console.log(statistics);
  return (
    <div className="bg-primary p-5 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default App;
