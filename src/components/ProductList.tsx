import { products, type Product } from "../data/products";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";

export function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="products">
      {products.map((p: Product) => (
        <div key={p.id} className="product">
          {p.name} - {formatPrice(p.price)}kr.{" "}
          <button onClick={() => addToCart(p)}>Setja í körfu</button>
        </div>
      ))}
    </div>
  );
}
