import { useState } from "react";

export default function Select({ data, children }) {
  const [select, setSelect] = useState(data[0].value);

  function handleChange(event) {
    setSelect(event.target.value);
  }

  return (
    <>
      <label>{children}</label>
      <select value={select} onChange={handleChange}>
        {data.map((item, i) => (
          <option key={i} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </>
  );
}
