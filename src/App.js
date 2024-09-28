// import Button from "./Button";
import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  // const iRunOnlyOnce = () => {
  //   console.log("i run only once.");
  // }
  // useEffect(iRunOnlyOnce, []);

  useEffect(()=> {
    console.log("CALL THE API...");
  }, [])
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {/* <Button text={"Continue"} /> */}
    </div>
  );
}

export default App;
