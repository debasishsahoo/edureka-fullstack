import React, { useState, useEffect, useCallback } from "react";

const UseDataFetching = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      const newData = await res.json();
      setData(newData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
};

export default UseDataFetching;
