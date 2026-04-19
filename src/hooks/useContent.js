import { useEffect, useState, useCallback } from "react";

export const useContent = fetchFn => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const load = useCallback(async () => {
		try {
			setLoading(true);
			setError(null);

			const result = await fetchFn();
			setData(result);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}, [fetchFn]);

	useEffect(() => {
		load();
	}, [load]);

	return { data, loading, error, retry: load };
};
