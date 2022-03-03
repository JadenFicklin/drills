import React, { useState } from "react";
import ListItem from "./ListItem";

function AppSixApp() {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState(["test", "test2"]);

  return (
    <>
      <h1>My to-do list:</h1>

      {/* input */}
      <input
        placeholder="Enter new task"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* button */}
      <button onClick={() => setArr([...arr, input])}>Add</button>
      {arr.map((item, index) => (
        <ListItem item={item} key={index} />
      ))}
    </>
  );
}

export default AppSixApp;
