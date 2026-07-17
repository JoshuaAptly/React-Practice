import "./App.css";
import { UserProvider } from "./context/UserContext";
import { AppRouter } from "./routes";

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
