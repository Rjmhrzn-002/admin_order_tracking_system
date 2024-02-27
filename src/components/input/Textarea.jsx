const Textarea = (props) => {
  // console.log(props);
  return (
    <div className="flex-1">
      <textarea
        className={` w-full border px-4 py-4 mb-1 text-md placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring  ease-linear transition-all duration-150
        ${Boolean(props.error) && "border-red-500"}`}
        {...props}
      />
    </div>
  );
};

export default Textarea;
