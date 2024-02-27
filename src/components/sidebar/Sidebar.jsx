import { NavLink } from "react-router-dom";
import SidebarButton from "../sidebarButton/SidebarButton";
import { sidebarList } from "./sidebarData";

const Sidebar = () => {
  return (
    <main className="bg-[#212121] h-full">
      <section className="flex flex-col  items-center">
        {sidebarList.map((item) => {
          return (
            <NavLink key={item.id} className="w-full" to={item.path}>
              <SidebarButton title={item.title} icon={item.icon} />
            </NavLink>
          );
        })}
      </section>
    </main>
  );
};

export default Sidebar;
