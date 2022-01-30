import React from "react";

const Login = () => {
  return (
    <div>
      <div className="container border rounded-lg shadow-2xl backdrop-blur- bg-white/30 mx-auto w-3/12 h-auto">
        <form className="grid grid-cols-1 flex space-y-4  p-4">
          <input
            className=" border rounded-md p-1 hover:border-amber-700  "
            placeholder="Email"
          />
          <input
            className="border rounded-md p-1 hover:border-amber-700 "
            placeholder="Password"
          />
          <button className="  bg-amber-500 hover:bg-blue-500 px-2 py-1 rounded text-white ">
            Login
          </button>
        </form>
        <div className=" container mx-auto space-y-4 p-5 grid grid-cols-1">
          <a href="#home" className="text-black bg-white p-1 rounded">
            Forgotten Password?
          </a>
          <hr className="w-4/5" />
          <button className=" w-4/5 bg-green-500 hover:bg-green-600 px-2 py-2 rounded text-white ">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
