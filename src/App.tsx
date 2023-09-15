import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="bg-slate-950 h-screen">
        <Navbar />
        <Outlet />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
