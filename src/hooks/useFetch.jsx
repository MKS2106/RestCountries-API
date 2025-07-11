import { useState, useEffect } from 'react';
 
function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    if (!url) return; // Don't fetch if URL is not provided
 
    const controller = new AbortController(); // For cleanup
    setData(null); // Reset data on new fetch
    setError(null); // Reset error on new fetch
    setLoading(true);
 
    const fetchData = async () => {
      try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        if (!response.ok) {
          const message = getErrorMessage(response.status)
          throw new Error(
            `HTTP error! status: ${response.status}\n\n${message}`
          );
        }
        const result = await response.json();
        // console.log(result)
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError') { // Don't set error if aborted
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
 
    fetchData();
 
    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [url, options]); // Re-run if url or options change
 
  return { data, loading, error };
}
 
export default useFetch;

function getErrorMessage(statuscode){
  const messages = {
    400: "Bad Request - invalid request",
    401: "Unauthorised", 
    403: "Forbidden — You do not have permission to access this resource.",
    404: "Not Found-The server cannot find the requested resource.",
    422: "Unprocessable Content",
    500: "Internal Server Error"
  }
  return messages[statuscode] || "Unexpected Error Occurred"
}