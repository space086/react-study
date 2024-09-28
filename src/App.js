// import Button from "./Button";
import { useState, useEffect } from "react";
import styles from "./App.module.css";

function Hello() {
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
}

function App() {
  // useEffect
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  // cleanup
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const clickBtn = () => setShowing((prev) => !prev)
  console.log("i run all the time");
  // const iRunOnlyOnce = () => {
  //   console.log("i run only once.");
  // }
  // useEffect(iRunOnlyOnce, []);

  useEffect(()=> {
    console.log("i run only once");
  }, []);
  // useEffect(()=> {
  //   if(keyword !== "" && keyword.length > 5) {
  //     console.log("SEARCH FOR", keyword);
  //   }
  // }, [keyword]);
//   useEffect(()=> {
//     console.log("SEARCH FOR", keyword);
// }, [keyword]);
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'keyword & counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {/* <Button text={"Continue"} /> */}
      <hr></hr>
      {/* cleanUp */}
      {showing ? <Hello /> : null}
      <button onClick={clickBtn}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
