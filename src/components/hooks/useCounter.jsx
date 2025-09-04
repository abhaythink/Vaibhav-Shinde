import { useEffect, useState } from "react";

const useCounter = ( props ) => {
  const [counter, setCounter] = useState(0);
console.log(props);
  useEffect(() => {
    if (props == "forword") {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    else{
        if (props == "backword") {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    }
  }, []);

  return counter;
};

export default useCounter;
