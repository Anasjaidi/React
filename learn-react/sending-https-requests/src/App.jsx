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

	const [error, setError] = useState("");

	const fetchMovies = async () => {
		try {

			setError("");

			setLoading(true);

			const res = await fetch("https://swapi.dev/api/fims/");

			if (!res.ok) {
				throw Error("something wrong")
			}

			const data = await res.json();

			const moviesTranslated = data.results.map((e) => {
				return {
					id: e.episode_id,
					title: e.title,
					openingText: e.opening_crawl,
					releaseDate: e.release_date,
				};
			});

			setMovies(moviesTranslated);
		} catch (err) {
			setError(err.msg)
		}
		setLoading(false);
	};

	let content = <p>Found nothing!</p>

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	} if (loading) {
		content = <p>is Loading...</p>
	} if (error) {
		content = <p>{error}</p>
	}


	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMovies}>Fetch Movies</button>
			</section>
			<section>
				{content}
			</section>
		</React.Fragment>
	);
}

export default App;
