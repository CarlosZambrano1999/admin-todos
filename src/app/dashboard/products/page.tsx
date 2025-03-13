import { ProductCard } from "@/components";
import { products } from "@/data/products";

export const metada = {
  title: "Listado de Productos",
  description: "SEO title",
};

export default function ProductPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 fap-2">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
