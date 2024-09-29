// // import Button from "./Button";
// import { useState, useEffect } from "react";
// import styles from "./App.module.css";

// function Hello() {
//   useEffect(function () {
//     console.log("hi :)");
//     return function () {
//       console.log("bye :(");
//     };
//   }, []);
// }

// function App() {
//   // useEffect
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   // cleanup
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   const clickBtn = () => setShowing((prev) => !prev)
//   console.log("i run all the time");
//   // const iRunOnlyOnce = () => {
//   //   console.log("i run only once.");
//   // }
//   // useEffect(iRunOnlyOnce, []);

//   useEffect(()=> {
//     console.log("i run only once");
//   }, []);
//   // useEffect(()=> {
//   //   if(keyword !== "" && keyword.length > 5) {
//   //     console.log("SEARCH FOR", keyword);
//   //   }
//   // }, [keyword]);
// //   useEffect(()=> {
// //     console.log("SEARCH FOR", keyword);
// // }, [keyword]);
//   useEffect(() => {
//     console.log("i run when 'keyword' changes.");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("i run when 'counter' changes.");
//   }, [counter]);
//   useEffect(() => {
//     console.log("i run when 'keyword & counter' changes.");
//   }, [keyword, counter]);

//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
//       <h1 className={styles.title}>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//       {/* <Button text={"Continue"} /> */}
//       <hr></hr>
//       {/* cleanUp */}
//       {showing ? <Hello /> : null}
//       <button onClick={clickBtn}>{showing ? "hide" : "show"}</button>
//     </div>
//   );
// }

// export default App;


/*
// To Do List (24.09.29)
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(toDo);
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);
  return (
  <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
      <button>Add To Do</button>
    </form>
    <hr />
    {toDos.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </div>
  );
}

export default App;
*/

/*
// 암호화폐 사이트 (09.29)

*/

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      console.log("coins", coins);
      setLoading(false);
    });
  }, [])

  return (
  <div>
     <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {/* {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD */}
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
  </div>
  );
}

export default App;