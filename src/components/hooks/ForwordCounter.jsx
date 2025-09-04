import useCounter from "./useCounter";

const ForwordConter = () => {
  const forwordCounter = useCounter("forword");
  const backwordCounter = useCounter("backword");

  return (
    <>
      <h1>Forword counter is : {forwordCounter}</h1>
      <h1>backword counter is : {backwordCounter}</h1>
    </>
  );
};
export default ForwordConter;
