const TaskList = ({task,index ,handleDeleteTask,handleUpdateTask}) => {
  return (
   

      <div className="flex justify-between bg-[#291C1C] px-2 py-1 my-2 items-center  gap-2 w-full">
        <p className="text-white text-xs">
         {task}
        </p>
        <div className="flex justify-center items-center gap-1 text-sm">
          <button onClick={()=>handleUpdateTask(index)} className="p-1 bg-green-500  rounded">
            <i className="text-xm ri-edit-fill"></i>
          </button>
          <button onClick={()=>handleDeleteTask(index)} className="p-1 bg-red-500 rounded">
            <i className="ri-chat-delete-fill"></i>
          </button>
        </div>
      </div>

    
  );
};

export default TaskList;
