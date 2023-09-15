import { Link } from "react-router-dom";
import { BoltIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import SearchBar from "./SearchBar";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Navbar() {
  const { cartQuantity } = useShoppingCart();
  return (
    <>
      <div className="flex justify-center text-white p-6 text-2xl">
        <div className="mr-3 hover:text-red-700">
          <Link to={"/"}>
            <BoltIcon className="w-16" />
          </Link>
        </div>
        <span className="mt-3 hover:text-red-700">
          <Link to={"/"}>Bolter</Link>
        </span>
        <SearchBar />
        <button
          type="button"
          data-te-offcanvas-toggle
          data-te-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <div className="flex flex-row hover:text-red-700 mt-3 ml-8 relative">
            <span>Cart</span>
            <ShoppingCartIcon className="w-8 mb-6 ml-2" />
            <div className="flex rounded-lg bg-red-700 justify-center items-center absolute w-7 bottom-2 left-16 text-xl">
              {cartQuantity}
            </div>
          </div>
        </button>
        <div className="flex mt-3 ml-16 text-white">
          <Link className="hover:text-red-700" to={"login"}>
            Log in
          </Link>
        </div>
      </div>
    </>
  );
}
