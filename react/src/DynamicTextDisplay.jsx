import React, { useState } from "react";
import Header from "./header";
function DynamicTextDisplay() {
  const [text, setText] = useState("");

  return (
    <>
    <Header />
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>Output:</h3>
      <p>{text}</p>
    </div>
    </>
  );
}

export default DynamicTextDisplay;