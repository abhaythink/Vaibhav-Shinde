import { useEffect, useState } from "react";

const UseHttp = (requestConfig,applyData) => {
  const [isLoading, setIsLaoding] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setIsLaoding(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method:'GET',
        headers: requestConfig.headers ? requestConfig.headers :{},
        body: requestConfig.body? JSON.stringify(requestConfig.body):null
      });
      const res = await response.json();
      console.log(response);
      console.log(res);
      applyData(res);
      if (!response.ok) {
        throw new Error("Request failed");
      }
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setIsLaoding(false);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    isLoading,
    error,
    sendRequest
  }
};
export default UseHttp;
