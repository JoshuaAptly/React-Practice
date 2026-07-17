import { useState, type ChangeEvent, type FormEvent } from "react";

export function ControlledForm() {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("your name is " + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label> The Form is Below</label>
      <input
        style={{ border: "2px solid black" }}
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" style={{ backgroundColor: "red", padding: "10px" }}>
        Submit form
      </button>
    </form>
  );
}
