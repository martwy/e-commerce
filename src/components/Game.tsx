import { useState } from "react";
import { Game as GameType } from "../utils/Game";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Game({
  id,
  name,
  released,
  background_image,
  metacritic,
  price,
}: GameType) {
  const [showInfo, setShowInfo] = useState(false);
  const { increaseCartQuantity } = useShoppingCart();
  return (
    <div className="flex text-sm text-white w-1/6">
      <div
        className="bg-gray-800 rounded-md"
        onMouseOver={() => setShowInfo(true)}
        onMouseOut={() => setShowInfo(false)}
      >
        <span>
          <img
            className="object-fill h-48 w-80 rounded-lg"
            src={background_image}
            alt=""
          />
        </span>
        <div className="flex flex-col ml-2 mt-1 pb-2">
          <div className="flex flex-row text-base justify-between px-2">
            <span className="text-xl">{name}</span>
            <span className="text-slate-300 mt-1">${price.toFixed(2)}</span>
          </div>
          {showInfo && (
            <div className="text-sm px-2 flex flex-col">
              <span>Released date: {released}</span>
              <span>Metacritic: {metacritic}</span>
            </div>
          )}
          <button type="button" onClick={() => increaseCartQuantity(id)}>
            <div className="flex text-xl justify-center mt-2 hover:text-red-700">
              <PlusIcon className="w-6" />
              <span>Add to cart</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
