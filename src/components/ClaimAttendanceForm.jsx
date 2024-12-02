import React, { useState } from "react";

const ClaimAttendanceForm = () => {
  const [eventCode, setEventCode] = useState("");
  const [userName, setUserName] = useState("");

  const handleClaim = (e) => {
    e.preventDefault();
    // Logic to claim attendance
    console.log("Attendance Claimed:", { eventCode, userName });
  };

  return (
    <div>
      <h2>Claim Attendance</h2>
      <form onSubmit={handleClaim}>
        <div>
          <label>Event Code:</label>
          <input
            type="text"
            value={eventCode}
            onChange={(e) => setEventCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Your Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Claim Attendance</button>
      </form>
    </div>
  );
};

export default ClaimAttendanceForm;
