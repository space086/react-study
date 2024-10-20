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
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
  </div>
  );
}

export default App;
*/

/*
// 영화 소개 사이트 (09.29) - 컴포넌트 나누기 전

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    console.log("json", json.data)
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            {movie.hasOwnProperty("genres")? 
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            : null}
          </div>
        ))}
        </div>
      )}
    </div>
  );
}

export default App;

*/

/* 영화 사이트
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/abot-us">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

 */

/* jsx + props 
import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
         <Food
         key={dish.id}
         name={dish.name}
         picture={dish.image}
         rating={dish.rating}
       />
      ))}
    </div>
  );
}


export default App;
*/

import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
        </div>
        )}
      </section>
    );
  }
}

export default App;