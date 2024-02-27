const Input = (props) => {
  // console.log(props);
  return (
    <div className="flex-1">
      <input
        className={`w-full px-4 py-4 mb-1 text-md shadow-lg border border-slate-100 placeholder-zinc-500 text-zinc-800 bg-white rounded focus:outline-none focus:ring  ease-linear transition-all duration-150
        ${Boolean(props.error) && "border-red-500"}`}
        {...props}
      />
    </div>
  );
};

export default Input;
