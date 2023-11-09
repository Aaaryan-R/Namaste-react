import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();

  if (err) {
    console.log(err); // Check the error object in the console
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1>Oops!!</h1>
        <p>{err.data}</p>
        <p>{`${err.status} : "${err.statusText}"`}</p>
      </div>
    );
  }
};
