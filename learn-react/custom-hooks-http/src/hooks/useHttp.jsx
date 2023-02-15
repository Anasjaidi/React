const useHttps = (config) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchTasks = async (taskText) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(config.url, {
				method: config.method,
				body: JSON.stringify(config.body),
        "headers": config.headers
			});

			if (!response.ok) {
				throw new Error(config.err);
			}

			const data = await response.json();

			const loadedTasks = [];

			for (const taskKey in data) {
				loadedTasks.push({ id: taskKey, text: data[taskKey].text });
			}

			setTasks(loadedTasks);
		} catch (err) {
			setError(err.message || "Something went wrong!");
		}
		setIsLoading(false);
	};
};

export default useHttps;
