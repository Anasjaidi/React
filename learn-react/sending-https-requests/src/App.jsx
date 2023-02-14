import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

/**
const data = fetch("https://swapi.dev/api/films/", {
	'method': 'POST',
	'body' : {
		'name': "anas"
	}
})
.then((res) => res.json())
.then((data) => console.log(data))
.catch(err => console.log(err));
*/

function App() {

	const [movies, setMovies] = useState([])

	useEffect( () => {
		fetch("https://swapi.dev/api/films/")
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.result);
				console.log(data)
			})
			.catch((e) => console.error(e));
		return () => {};
	}, []);
	const dummyMovies = [
		{
			id: 1,
			title: "Some Dummy Movie",
			openingText: "This is the opening text of the movie",
			releaseDate: "2021-05-18",
		},
		{
			id: 2,
			title: "Some Dummy Movie 2",
			openingText: "This is the second opening text of the movie",
			releaseDate: "2021-05-19",
		},
	];

	return (
		<React.Fragment>
			<section>
				<button>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</React.Fragment>
	);
}

export default App;
