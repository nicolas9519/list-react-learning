import { useEffect, useState } from "react";

const LoadData = (initialUrl, defaultValue) => {
  const [data, setData] = useState(defaultValue);
  const [url, setUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      setLoading(true);
      setError(true);
      try {
        if (url) {
          setData({ items: [{ id: null, name: 'Loading...' }] });
          const response = await fetch(url);
          const jsonResponse = await response.json();
          if (!cancel) {
            setData(jsonResponse);
          }
        } else {
          setData(defaultValue);
        }
      } catch (error) {
        if (!cancel) {
          setError(true);
        }
      }
      setLoading(false);
    }
    fetchData();
    return () => {
      cancel = true;
    }
  }, [url]);
  return [{ data, loading, error }, setUrl];
}

export default LoadData;
