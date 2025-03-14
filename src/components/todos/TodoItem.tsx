'use client';
import { startTransition, useOptimistic } from "react";
import { Todo } from "@prisma/client";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  // TODO: Acciones que quiero llamar
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {

  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(todo, 
    (state, newCompleteValue: boolean) => ({...state, complete: newCompleteValue})
  );

  const onToggleTodo = async() => {
    try {
      startTransition(() => toggleTodoOptimistic( !todoOptimistic.complete));
      toggleTodoOptimistic(!todoOptimistic.complete);
      await toggleTodo( todoOptimistic.id, !todoOptimistic.complete)
    } catch (error) {
      console.log(error);
      startTransition(() => toggleTodoOptimistic( !todoOptimistic.complete));
    }
  }
  return (
    <div className={`
        ${todoOptimistic.complete ? "bg-blue-50 border-blue-500 line-through" : "bg-red-50 border-red-500"}
        p-5 rounded-lg shadow-sm border-dashed flex flex-col justify-between items-center gap-2
      `}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          // onClick={() => toggleTodo(todoOptimistic.id, !todoOptimistic.complete)}
          onClick={onToggleTodo}
          className={`
              flex p-2 rounded-md cursor-pointer
              hover:bg-opacity-60
              ${todoOptimistic.complete ? "bg-blue-100" : "bg-red-100"}
            `}
        >
          {todoOptimistic.complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>

        <div className="text-center sm:text-left">{todoOptimistic.description}</div>
      </div>
    </div>
  );
};
