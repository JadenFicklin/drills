import React, { useState } from "react";

function SetOne() {
  const [input, setInput] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <h4>{input}</h4>
    </>
  );
}

export default SetOne;
//6 minutes
