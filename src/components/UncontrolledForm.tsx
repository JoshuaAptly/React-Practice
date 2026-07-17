import { useRef } from "react";

export function UnControlledForm() {
  const ref = useRef(0);

  const handleCLick = () => {
    ref.current = ref.current + 1;
    alert("you have clicked" + ref.current + "times");
  };

  return (
    <div>
      <button onClick={handleCLick}>Click me</button>
    </div>
  );
}
