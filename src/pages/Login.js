import React, { useContext } from "react";
import { Web3Context } from "../context/Web3Context";

const Login = () => {
  const { login } = useContext(Web3Context);

  const handleLogin = async () => {
    await login();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded"
        onClick={handleLogin}
      >
        Login with Wallet
      </button>
    </div>
  );
};

export default Login;
