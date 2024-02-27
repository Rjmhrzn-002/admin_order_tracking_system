import HomeCard from "../components/homeCard/HomeCard";
import { FaHome, FaAddressCard } from "react-icons/fa";
import { RiTodoFill } from "react-icons/ri";

const Home = () => {
  const homeCardMapList = [
    { id: 1, title: "Orders", count: 13, icon: <FaHome />, bgColor: "#763996" },
    {
      id: 2,
      title: "Messages",
      count: 25,
      icon: <FaAddressCard />,
      bgColor: "#395996",
    },
    {
      id: 3,
      title: "Inventory",
      count: 8,
      icon: <RiTodoFill />,
      bgColor: "#399676",
    },
  ];
  return (
    <main className="h-full flex flex-col gap-2">
      <div className="flex flex-col md:flex-row gap-2 w-full " id="upperDiv">
        {homeCardMapList.map((card) => {
          return (
            <div className="relative flex-1">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://i.pinimg.com/236x/1a/43/fc/1a43fc013c98d8d3747ef32f25ff438b.jpg"
                  alt="icon"
                  className="h-full w-full object-cover opacity-25"
                />
              </div>
              <HomeCard
                key={card.id}
                title={card.title}
                count={card.count}
                icon={card.icon}
                bgColor={card.bgColor}
              />
            </div>
          );
        })}
      </div>
      <div
        id="loweDiv"
        className="h-full w-full flex flex-col md:flex-row gap-2"
      >
        <div className="bg-amber-200 flex-1 h-full w-full">Bar Graph</div>
        <div className="bg-fuchsia-300 flex-1 h-full w-full">Stats</div>
      </div>
    </main>
  );
};

export default Home;
