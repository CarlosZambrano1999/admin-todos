import { NewTodo, TodosGrid } from "@/components";
import prisma from "@/lib/prisma";

export const dynamic = 'auto';
export const revalidate = 0;
export const metada = {
  title: "Listado de Todos",
  description: "SEO title",
};

export default async function ServerTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  
  return (
    <>
    <span className="text-3xl mb-10">Server Actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      
      <TodosGrid todos={ todos } />
    </>
  );
}

