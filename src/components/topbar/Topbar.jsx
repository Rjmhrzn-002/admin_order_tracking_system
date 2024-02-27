import Button from "../button/Button";
const Topbar = () => {
  return (
    <section className="h-16 flex items-center justify-between px-12 shadow-lg">
      <div className="uppercase text-xl font-bold cursor-default">Admin</div>
      <Button title="Logout" bgColor="#763996" />
    </section>
  );
};

export default Topbar;
