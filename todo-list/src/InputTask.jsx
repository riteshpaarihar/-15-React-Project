import { useRef } from "react";

const InputTask = ({addNewTask}) => {
  const input = useRef(null);
  const addTask = () => {
    if (input.current && input.current.value.trim() !== "") {
      const newTask=input.current.value;
      addNewTask(newTask);
      //console.log(input.current.value);
      input.current.value = "";
    } else {
      alert("Please enter a task name");
    }
  };
  return (
    <div className="relative my-2">
      <input
        ref={input}
        type="text"
        className="py-1 border-none outline-none px-5  rounded bg-zinc-300 w-full text-xl text-[#1E1E1E]"
        placeholder="Add a task"
      />
      <button
        onClick={addTask}
        className="bg-green-600 text-white text-xs px-4 py-2  rounded absolute top-2 right-0 "
      >
        <span>
          <i className=" mr-2 ri-sticky-note-add-fill"></i>
        </span>
        Add
      </button>
    </div>
  );
};

export default InputTask;
