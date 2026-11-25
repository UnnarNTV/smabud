import { useCart } from "../hooks/useCart";

export function Header() {
  const { items } = useCart();
  return (
    <>
      <h1>Smábúðin</h1>
      <h2 className="badge">Karfa ({items.length})</h2>
    </>
  );
}
