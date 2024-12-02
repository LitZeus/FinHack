import React from "react";
import { useWeb3 } from "./context/web3Context";
import EventCreationForm from "./components/EventCreationForm";
import ClaimAttendanceForm from "./components/ClaimAttendanceForm";

const App = () => {
  const { account, connectWallet, contract } = useWeb3();

  return (
    <div className="App">
      <header>
        <h1>Welcome to the Web3 Event Platform</h1>
      </header>

      {!account ? (
        <div>
          <p>Please connect your MetaMask wallet to continue.</p>
          <button onClick={connectWallet}>Connect Wallet</button>
        </div>
      ) : (
        <div>
          <h3>Connected Account: {account}</h3>
          <section>
            <h2>Create an Event</h2>
            <EventCreationForm contract={contract} />
          </section>
          <section>
            <h2>Claim Attendance</h2>
            <ClaimAttendanceForm contract={contract} />
          </section>
        </div>
      )}
    </div>
  );
};

export default App;
