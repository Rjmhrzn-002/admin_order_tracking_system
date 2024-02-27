import Input from "../components/input/Input";
import { FaSearch } from "react-icons/fa";
import SearchButton from "../components/button/SearchButton";
const Order = () => {
  const tableHeading = [
    "Id",
    "User",
    "User Email",
    "Product Name",
    "Total Price",
    "Action",
  ];

  const demoData = [
    {
      id: "101",
      userId: "120356",
      userContact: "demo123@gmail.com",
      productName: "Iphone 14 pro max",
      totPrice: "185,000",
    },
    {
      id: "102",
      userId: "120356",
      userContact: "demo123@gmail.com",
      productName: "Iphone 14 pro max fsddfsd sfda fsd s fsda ",
      totPrice: "185,000",
    },
    {
      id: "103",
      userId: "120356",
      userContact: "demo123@gmail.com",
      productName: "Iphone 14 pro max",
      totPrice: "185,000",
    },
  ];

  return (
    <main className="w-full">
      <div className="w-2/5 relative flex items-center">
        <Input placeholder="Search" />
        <FaSearch className="absolute right-6" color="gray" />
      </div>
      <table className="border-none w-full mt-6 rounded-lg overflow-hidden">
        <thead className="bg-[#763996] text-white">
          {tableHeading.map((headData, index) => {
            return (
              <td
                key={index}
                className="border text-center uppercase font-semibold py-2 box-border"
              >
                {headData}
              </td>
            );
          })}
        </thead>
        {demoData.map((data, index) => {
          return (
            <tr key={index} className="odd:bg-zinc-200 even:bg-zinc-300 border">
              <td className="border px-4">{data.id}</td>
              <td className="border px-4">{data.userId}</td>
              <td className="border px-4">{data.userContact}</td>
              <td className="border px-4">{data.productName}</td>
              <td className="border px-4">{data.totPrice}</td>
              <td className="flex justify-center gap-2 px-4 py-1">
                <SearchButton title="edit" bgColor="#990000"></SearchButton>
                <SearchButton title="delete" bgColor="#008000"></SearchButton>
              </td>
            </tr>
          );
        })}
      </table>
    </main>
  );
};

export default Order;
