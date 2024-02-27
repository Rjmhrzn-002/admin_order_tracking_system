import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import "../index.css";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <main className="flex flex-grow">
        <aside className="w-64">
          <Sidebar />
        </aside>
        <section className="flex-grow p-6">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
