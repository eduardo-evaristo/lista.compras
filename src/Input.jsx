import { useState } from "react";

export default function Input({ children }) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <label>{children}</label>
      <input type="text" value={input} onChange={handleChange} required />
    </>
  );
}
