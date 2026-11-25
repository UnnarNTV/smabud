import { useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { Product } from "../data/products";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useLocalStorage<Product[]>("cart", []);

  // TODO 1: Reiknið samtölu allra verða í körfunni.
  const total = items.reduce((sum, item) => sum + item.price, 0);

  function addToCart(product: Product) {
    // TODO 2: Bætið product aftast í körfuna.
    setItems([...items, product]);
  }

  function removeFromCart(index: number) {
    // TODO 3: Fjarlægið vöruna á sæti index.
    setItems(items.filter((_, i) => i !== index));
  }

  function clearCart() {
    // TODO 4: Tæmið körfuna.
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{ items, total, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
