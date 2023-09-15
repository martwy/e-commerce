import { useShoppingCart } from "../context/ShoppingCartContext";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Game as GameType } from "../utils/Game";

type CartGameProps = {
  id: number;
  quantity: number;
};

export default function CartGame({ id, quantity }: CartGameProps) {
  const { games, increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  return (
    <>
      {games.map((game: GameType) => {
        if (game.id === id) {
          return (
            <div key={game.id} className="mb-4">
              <img
                className="object-fill h-16 w-28 rounded-lg"
                src={game.background_image}
                alt=""
              />
              <div className="flex gap-4 mt-1">
                <span>{game.name}</span>
                <span className="text-slate-300 text-sm mt-1">x{quantity}</span>
                <span>${(game.price * quantity).toFixed(2)}</span>
              </div>
              <span className="text-slate-300 text-sm mt-1">
                ${game.price.toFixed(2)}
              </span>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    decreaseCartQuantity(id);
                  }}
                >
                  <MinusIcon className="w-5" />
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => {
                    increaseCartQuantity(id);
                  }}
                >
                  <PlusIcon className="w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    removeFromCart(id);
                  }}
                >
                  <TrashIcon className="w-5" />
                </button>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}
