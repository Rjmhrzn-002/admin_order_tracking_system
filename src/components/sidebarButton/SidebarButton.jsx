const SidebarButton = ({ title, icon }) => {
  return (
    <main className="flex items-center gap-4 w-full h-full p-5 text-white cursor-pointer border-zinc-700 border-b-2 text-lg hover:bg-[#495464]">
      <div className="hidden md:block">{icon}</div>
      <div>{title}</div>
    </main>
  );
};

export default SidebarButton;
