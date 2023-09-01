import React from "react";
import styles from "./utils/style";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="bg-primary p-5 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default App;
