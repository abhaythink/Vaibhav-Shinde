import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import axios from "axios";
import ForwordConter from "./components/hooks/ForwordCounter";
import UseHttp from "./components/hooks/UseHttp";
function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // function fetchMoviesHandler() {
  //   fetch("https://jsonfakery.com/movies/paginated")
  //     .then((response) => {
  //       setIsLoading(true);
  //       setError(null);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transFormedMovies = data?.data?.map((movie) => {
  //         return {
  //           id: movie.id,
  //           title: movie.original_title,
  //           releaseDate: movie.release_date,
  //           openingText: movie.overview,
  //         };
  //       });
  //       setMovies(transFormedMovies);
  //       console.log(transFormedMovies);
  //       setIsLoading(false);
  //     });
  // }

  // async function addMovieHandler(movie) {
  //   const response = fetch("ttps://jsonfakery.com/movies/paginated", {
  //     method: "POST",
  //     body: JSON.stringify(movie),
  //     headers: {
  //       "Context-Type": "application/json",
  //     },
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // }

  //axios alwayes retuns a promise.
  // Example POST request
  // async function createUser() {
  //   try {
  //     const response = await axios.post(
  //       "https://jsonplaceholder.typicode.com/users",
  //       {
  //         name: "John Doe",
  //         email: "john@example.com",
  //         username: "johndoe",
  //       }
  //     );

  //     console.log("Response data:", response.data);
  //   } catch (error) {
  //     console.error("Error occurred:", error);
  //   }
  // }

  // createUser();

  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, []);
  // async function fetchMoviesHandler(){
  //   const response=await fetch('https://jsonfakery.com/movies/paginated');
  //   const res=response.json();
  //    console.log(res);
  // }

  // async function axiosMovieHandler() {
  //   const res = await axios.get("https://jsonfakery.com/movies/paginated");
  //   console.log("i am axios");
  //   console.log(res);
  // }

  // axiosMovieHandler();
  // fetchMoviesHandler();

  // Axios is a promise-based HTTP client for the browser and Node.js. It's used to make HTTP requests (like GET,
  // POST, PUT, DELETE) to REST APIs, similar to fetch, but with more features and conveniences out-of-the-box.
  // ✅ Key Features of Axios:
  // Feature	Description

  // ✅ Promise-based	Works seamlessly with async/await syntax
  // ✅ Auto JSON handling	Automatically converts responses to JSON
  // ✅ HTTP error handling	Throws for HTTP status codes like 404, 500 (unlike fetch)
  // ✅ Timeout support	Easily add timeouts to requests
  // ✅ Progress tracking	Track file upload/download progress
  // ✅ Node.js & browser	Can be used both in frontend (React) and backend (Node.js/Express)

  //  Comparison: fetch vs axios for POST
  // Feature	fetch                                axios
  // Syntax	More verbose (need JSON.stringify)	      Cleaner (auto handles JSON)
  // Error handling	Must check response.ok            manually	Throws for HTTP errors automatically
  // JSON parsing	Must manually call res.json()	      res.data is already parsed
  // Config flexibility	Less intuitive	              Easy with axios config objects

  const [movies, setMovies] = useState([]);
  const { isLoading, error, sendRequest: fetchMovies } = useHttp();

useEffect(() => {
    const transformMovies = (data) => {
      // adapt data if needed
      setMovies(data.items || data); // assuming the API returns `{ items: [...] }`
    };

    fetchMovies(
      { url: "https://jsonfakery.com/movies/paginated" },
      transformMovies
    );
  }, [fetchMovies]);




  return (
    // <React.Fragment>
    //   <section>
    //     <button>Fetch Movies</button>
    //   </section>
    //   <section>
    //     {isLoading ? <MoviesList movies={movies} /> : <p>Movies are loading</p>}
    //   </section>
    // </React.Fragment>

    <>
    {/* <ForwordConter/> */}
    <UseHttp/>
    {/* <h1>Counter</h1> */}
    </>
  );
}

export default App;
