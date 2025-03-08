import prisma from "@/lib/prisma";

export const metada = {
  title: "Listado de Todos",
  description: "SEO title",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <div>
      <h1>Hello Page RestTodosPage</h1>
      {JSON.stringify(todos)}
    </div>
  );
}
