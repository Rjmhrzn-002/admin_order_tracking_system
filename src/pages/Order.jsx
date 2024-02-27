import Input from "../components/input/Input";
import { FaSearch } from "react-icons/fa";
import SearchButton from "../components/button/SearchButton";
const Order = () => {
  const tableHeading = [
    "Id",
    "User Id",
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
      productName: "Iphone 14 pro max ",
      totPrice: "185,000",
    },
    {
      id: "103",
      userId: "120356",
      userContact: "demo123@gmail.com",
      productName: "Iphone 14 pro max",
      totPrice: "185,000",
    },
    {
      id: "103",
      userId: "120356",
      userContact: "demo123@gmail.com",
      productName: "Iphone 14 pro max",
      totPrice: "185,000",
    },
    {
      id: "103",
      userId: "120356",
      userContact: "demo123@gmail.com",
      productName: "Iphone 14 pro max",
      totPrice: "185,000",
    },
    {
      id: "103",
      userId: "120356",
      userContact: "demo123@gmail.com",
      productName: "Iphone 14 pro max",
      totPrice: "185,000",
    },
    {
      id: "103",
      userId: "120356",
      userContact: "demo123@gmail.com",
      productName: "Iphone 14 pro max",
      totPrice: "185,000",
    },
    {
      id: "103",
      userId: "120356",
      userContact: "demo123@gmail.com",
      productName: "Iphone 14 pro max",
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
      <div className="w-2/5 relative flex items-center mb-4">
        <Input placeholder="Search" />
        <FaSearch className="absolute right-6" color="gray" />
      </div>
      <div className=" overflow-hidden p-0 h-96 w-max md:w-full overflow-y-auto">
        <table className="border-none w-full   rounded-lg">
          <thead className="bg-[#763996] text-white sticky top-0">
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
              <tr
                key={index}
                className="odd:bg-zinc-200 even:bg-zinc-300 shadow-inner text-start"
              >
                <td className="  px-4 ">{data.id}</td>
                <td className="  px-4 overflow-hidden">{data.userId}</td>
                <td className="  px-4">{data.userContact}</td>
                <td className="  px-4">{data.productName}</td>
                <td className="  px-4">{data.totPrice}</td>
                <td className="flex justify-center gap-2 py-2 px-4">
                  <SearchButton title="edit" bgColor="#763996"></SearchButton>
                  <SearchButton title="delete" bgColor="#696969"></SearchButton>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </main>
  );
};

export default Order;
