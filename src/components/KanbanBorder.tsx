import PlusIcon from '../icons/PlusIcon'
import { useState } from 'react';
import { Column, Id } from '../types';
import ColumnContainer from './ColumnContainer';

function KanbanBorder() {
  const [columns, setColumns] = useState<Column[]>([]);
  console.log(columns);

  return (
    <div className="
        m-auto
        flex
        min-h-screen
        w-full
        items-center
        overflow-x-auto
        overflow-y-auto
        px-[40px]
    "
    >
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">{columns.map((col) => (
          <ColumnContainer 
          key={col.id} 
          column={col} 
          deleteColumn={deleteColumn}/>
          ))}
      </div>
        <button 
        onClick={() =>{
          createNewColumn();
        }}
        className="
              h-[60px]
              w-[350px]
              cursor-pointer
              rounded-lg
              bg-mainBackGoundColor
              border-2
              border-columnBackgroundColor
              p-4
              ring-rose-500
              hover:ring-2
              flex
              gap-2
          "
          >
            <PlusIcon />
            Adicionar coluna</button>     
      </div>
    </div>
  );
  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Coluna ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }
  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  }
}

function generateId() {
  return Math.floor(Math.random() * 10001);
}

export default KanbanBorder