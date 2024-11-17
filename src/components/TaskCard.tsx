import { Task } from "../types";

interface Props {
    task: Task;
}

function TaskCard({ task }: Props) {
  return (
    <div className="
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
    cursor-grab
    "
    >{task.content}</div>
  )
}

export default TaskCard