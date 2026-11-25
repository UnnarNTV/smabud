import "./App.css";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <div className="app">
      <Header />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
