import { NewTodo, TodosGrid } from "@/components";
import prisma from "@/lib/prisma";

export const metada = {
  title: "Listado de Todos",
  description: "SEO title",
};

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  
  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      
      <TodosGrid todos={ todos } />
    </div>
  );
}

