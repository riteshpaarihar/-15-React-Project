const Heading = ({task}) => {
  return (
    <div className="relative">
      <h1 className="my-3 text-center">ToDo Now</h1>
      <div className="flex items-center justify-center w-full h-10">
        <hr className="w-1/3 border-none bg-zinc-100 h-0.5" />
        <i className="mx-2 ri-sticky-note-add-fill text-zinc-200"></i>
        <hr className="w-1/3 border-none bg-zinc-100 h-0.5" />
      </div>

      <div className="items-center flex gap-2 ">
      <h1 className="my-3">Reaming Task : {task.length}</h1>
      </div>
    </div>
  );
};

export default Heading;
