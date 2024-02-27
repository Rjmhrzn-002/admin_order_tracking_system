import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import "../index.css";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <main className="flex flex-grow">
        <aside className="w-max md:w-64">
          <Sidebar />
        </aside>
        <section className="flex-grow w-96 md:w-full py-6 px-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
