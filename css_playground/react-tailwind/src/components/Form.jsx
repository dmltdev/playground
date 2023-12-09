import Input from "./Input";

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h2 className="text-4xl text-slate-700">
        Find the best deals in flights right now
      </h2>
      <form
        method="post"
        className="flex w-[80%] flex-col gap-4 rounded-xl border-2 border-slate-400/40 bg-slate-100 p-4 text-slate-700"
      >
        <Input caption="Leaving from..." type="text" required />
        <Input caption="Going to..." type="text" required />
        <div className="grid grid-cols-2 gap-4">
          <Input caption="Depart" type="date" required />
          <Input caption="Return" type="date" required />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-slate-800 py-4 font-semibold text-slate-100"
        >
          Search Flights
        </button>
      </form>
    </div>
  );
};

export default Form;
