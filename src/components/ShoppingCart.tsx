import { Offcanvas, initTE } from "tw-elements";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartGame from "./CartGame";

export default function ShoppingCart() {
  initTE({ Offcanvas });
  const { games, cartGames } = useShoppingCart();
  let totalSum = 0;
  games.map((game) => {
    cartGames.map((cartGame) => {
      if (game.id === cartGame.id) {
        totalSum += game.price * cartGame.quantity;
      }
      return null;
    });
    return null;
  });

  return (
    <>
      <div
        className="invisible fixed bottom-0 right-0 top-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        data-te-offcanvas-init
      >
        <div className="flex items-center justify-between p-4">
          <h5
            className="mb-0 font-semibold leading-normal"
            id="offcanvasRightLabel"
          >
            Shopping cart
          </h5>
          <button
            type="button"
            className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-offcanvas-dismiss
          >
            <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="offcanvas-body flex-grow overflow-y-auto p-4">
          {cartGames.map((game) => (
            <CartGame key={game.id} id={game.id} quantity={game.quantity} />
          ))}
          <div className="flex w-full justify-end text-xl">
            TOTAL: ${totalSum.toFixed(2)}
          </div>
        </div>
      </div>
    </>
  );
}
