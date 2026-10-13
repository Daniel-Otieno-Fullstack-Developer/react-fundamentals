import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClear() {
    setName("");
  }

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <p>Hello, {name || "stranger"}!</p>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default NameForm;
