const Input = ({ caption, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{caption}</label>
      <input
        className="rounded-md border-b-2 border-transparent bg-slate-200 p-2 placeholder-transparent focus:border-slate-800 focus:outline-none "
        {...props}
      />
    </div>
  );
};

export default Input;
