import { useUser } from "@/context/UserContext";

export function ContextApiDemo() {
  const { user } = useUser();

  return (
    <div
      style={{ marginTop: "20px", padding: "16px", border: "1px solid #ccc" }}
    >
      <h2>User from Context API</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
}
