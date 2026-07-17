import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export function Home() {
  const [user, setUser] = useState<User[]>([]);

  const navigate = useNavigate();

  async function loadUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const values = await response.json();
    console.log("data fetched", values);
    setUser(values);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional data fetch on mount
    void loadUsers();
  }, []);

  function nextPage() {
    navigate("/cform");
  }

  function goToContext() {
    navigate("/context");
  }

  return (
    <div>
      {user.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.username}</p>
            <p>{item.email}</p>
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          flexDirection: "row",
        }}
      >
        <button
          style={{ background: "blue", color: "white" }}
          onClick={() => void loadUsers()}
        >
          Update
        </button>
        <button
          style={{ background: "blue", color: "white" }}
          onClick={nextPage}
        >
          Next Page
        </button>
        <button
          style={{ background: "green", color: "white" }}
          onClick={goToContext}
        >
          Context API
        </button>
      </div>
    </div>
  );
}
