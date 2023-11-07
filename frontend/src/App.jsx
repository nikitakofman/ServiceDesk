import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-4xl">SERVICE DESK</p>
      <p className="text-4xl mt-10 mb-10">AUTHENTIFICATE YOURSELF</p>
      <div className="flex flex-col items-center justify-center">
        USERNAME
        <input type="text" className="mt-5 mb-5" />
        PASSWORD
        <input type="text" className="mt-5 mb-5" />
        <button
          type="submit"
          className="bg-sky-100 mt-10 w-20 text-black pr-4 flex items-center justify-center"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
