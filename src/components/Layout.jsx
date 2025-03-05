import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        <NavLink to="/posts" className={({ isActive }) => (isActive ? "active" : "")}>Posts</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;