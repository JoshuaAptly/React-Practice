import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export function Home() {
  const [user, setUser] = useState<User[]>([]);

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
      <button
        style={{ background: "blue", color: "white" }}
        onClick={() => void loadUsers()}
      >
        Update
      </button>
    </div>
  );
}
