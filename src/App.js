import React from "react";
import './App.scss'; // Import SCSS file
import ClaimAttendanceForm from "./components/ClaimAttendanceForm";
import EventCreationForm from "./components/EventCreationForm";
import { useWeb3 } from "./context/Web3Context";

const App = () => {
  const { account, connectWallet, contract } = useWeb3();

  return (
    <div className="App">
      <header>
        <h1>Welcome to the Web3 Event Platform</h1>
        <p>A platform where you can create events, track attendance, and manage everything through your MetaMask wallet.</p>
      </header>

      {!account ? (
        <div className="connect-wallet">
          <p>Please connect your MetaMask wallet to continue.</p>
          <button onClick={connectWallet}>Connect Wallet</button>
        </div>
      ) : (
        <div className="account-info">
          <h3>Connected Account: {account}</h3>

          <section>
            <EventCreationForm contract={contract} />
          </section>

          <section>
            <ClaimAttendanceForm contract={contract} />
          </section>
        </div>
      )}
    </div>
  );
};

export default App;
