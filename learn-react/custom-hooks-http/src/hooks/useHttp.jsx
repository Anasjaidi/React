const useHttps = (config, applyData) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchTasks = async (taskText) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(config.url, {
				method: config.method ? config.method : ,
				body: JSON.stringify(config.body) ? JSON.stringify(config.body) : null,
				headers: config.headers,
			});

			if (!response.ok) {
				throw new Error(config.err);
			}

			const data = await response.json();
       

      return {err: error, isLoading, sendReq: fetchTasks}
		} catch (err) {
			setError(err.message || "Something went wrong!");
		}
		setIsLoading(false);
	};
};

export default useHttps;
