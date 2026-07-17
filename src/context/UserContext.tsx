import { createContext, useContext, type ReactNode } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const dummyUser: User = {
  id: 1,
  name: "Joshua Vimal",
  email: "joshua@example.com",
  role: "Developer",
};

interface UserContextValue {
  user: User;
}

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  return (
    <UserContext.Provider value={{ user: dummyUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("NOt found");
  }

  return context;
}
