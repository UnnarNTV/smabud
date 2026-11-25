import { useCart } from "../hooks/useCart";
import { useToggle } from "../hooks/useToggle";
import { formatPrice } from "../utils/formatPrice";

export function Cart() {
  const { items, total, clearCart, removeFromCart } = useCart();
  const [on, toggle] = useToggle();
  return (
    <>
      <button onClick={toggle}>{on ? "Fela körfu" : "Sýna körfu"}</button>
      <h2 className="cart-header">Karfa</h2>
      {on && (
        <aside className="cart">
          {items.map((item, i) => (
            <div key={i}>
              {item.name}{" "}
              <button onClick={() => removeFromCart(i)}>Fjarlægja</button>
            </div>
          ))}
          {items.length > 0 ? (
            <>
              <div>Samtals: {formatPrice(total)}kr</div>
              <button onClick={clearCart}>Tæma körfu</button>
            </>
          ) : (
            <div>Karfan er tóm!</div>
          )}
        </aside>
      )}
    </>
  );
}
