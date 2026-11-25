import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart þarf CartProvider");
  }
  return ctx;
}
