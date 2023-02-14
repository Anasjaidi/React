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
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchMovies = async () => {
		try {
			setLoading(true);
			const res = await fetch("https://swapi.dev/api/films/");
			const data = await res.json();
			const moviesTranslated = data.results.map((e) => {
				return {id: e.episode_id, title: e.title,openingText: e.opening_crawl,releaseDate: e.release_date};
			});
			setMovies(moviesTranslated);
			console.log("ts")
			setLoading(false); 
		} catch (err) {console.error(err)}
	};
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
				<button onClick={fetchMovies}>Fetch Movies</button>
			</section>
			<section>
				{loading ? <p>is loading</p> : movies.length == 0 ? <p>nothing found</p> : <MoviesList movies={movies} />}
			</section>
		</React.Fragment>
	);
}

export default App;
