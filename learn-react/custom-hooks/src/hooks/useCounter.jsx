import { useEffect, useState } from "react";

export default (add) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + add);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return counter;
};
