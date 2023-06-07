import { useState, useEffect } from "react";

const useFetch = (url) => {
  // Hooks
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => {
      fetch(url, { signal: signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data :)");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          setPending(false);
          setError(err.message);
          setData(null);
        });
    }, 1000);

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, pending, error };
};

export default useFetch;
