const SidebarButton = ({ title, icon }) => {
  return (
    <main className="flex items-center gap-4 w-full h-full py-5 px-12 md:px-5 text-white cursor-pointer  text-lg hover:bg-[#495464]">
      <div className="hidden md:block">{icon}</div>
      <div>{title}</div>
    </main>
  );
};

export default SidebarButton;
