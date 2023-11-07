import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex text-black  justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center bg-white p-5 rounded-2xl">
        <p className="text-black text-3xl">SERVICE DESK</p>
        <p className="text-black text-3xl mt-10 mb-10">
          AUTHENTIFICATE YOURSELF
        </p>
        <div className="flex  flex-col items-center justify-center">
          USERNAME
          <input
            type="text"
            className="border-2 rounded-md bg-white mt-5 mb-5 p-3"
          />
          PASSWORD
          <input
            type="text"
            className="border-2 rounded-md bg-white mt-5 mb-5 p-3"
          />
          <button
            type="submit"
            className="bg-sky-100 mt-10 w-20 text-black pr-4 flex items-center justify-center"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
