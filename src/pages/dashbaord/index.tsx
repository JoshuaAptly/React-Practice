import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <header>
        <h2>My Dashboard</h2>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Copyright 2026</p>
      </footer>
    </div>
  );
}
