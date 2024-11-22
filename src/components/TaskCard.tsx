import { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { Task, Id } from "../types";

interface Props {
    task: Task;
    deleteTask: (id:Id) => void;
}

function TaskCard({ task, deleteTask }: Props) {
  const [mouseisOver, setMouseIsOver] = useState(false)
  
  return (
    <div 
    className="
      bg-mainBackGoundColor
      p-2.5
      h-[100px]
      min-h-[100px]
      items-center
      flex
      text-left
      rounded-xl
      hover:ring-2
      hover:inset
      hover:ring-rose-600
      cursor-grabs
      relative
    "
    
    onMouseEnter={() => {
      setMouseIsOver(true);
    }}
    onMouseLeave={() => {
      setMouseIsOver(false);
    }}
    > 
    {task.content}
      
      {mouseisOver && (<button 
      onClick={() => {
        deleteTask(task.id)
      }}
      className="
      stroke-white
      absolute
      right-4
      top-1/2
      -translate-y-1/2
      bg-cloumnBackgroundColor
      p-2
      rounded-full
      opacity-60
      hover:opacity-100
      "
      >
        <TrashIcon />
      </button>)}
    </div>
  )
}

export default TaskCard