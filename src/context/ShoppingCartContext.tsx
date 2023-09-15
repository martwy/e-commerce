import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useGames } from "../hooks/useGames";
import { Game as GameType } from "../utils/Game";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartGame = {
  id: number;
  quantity: number;
};

export type PriceProps = {
  id: number;
  price: number;
};

type ShoppingCartContextProps = {
  getGameQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartGames: CartGame[];
  games: GameType[];
  isLoading: boolean;
  isError: boolean;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartGames, setCartGames] = useState<CartGame[]>([]);
  // const [isGamesWithPrices, setIsGamesWithPrices] = useState(false);
  const prices = [
    56.897112895211286, 15.694469268526603, 36.47315679292788,
    43.06829384450425, 49.26858988157842, 38.35871737120295, 10.286509006131446,
    47.00571088757575, 19.790306639335192, 51.282912214352166,
    12.151528227492852, 19.70115791831034, 42.32764319276286,
    44.798766508709605, 37.6375496187524, 36.526862029903356, 51.569486005653,
    33.634980110314494, 51.692202444320806, 53.35986456684213,
  ];
  const { games, isLoading, isError } = useGames();

  if (isLoading) return <div>loading...</div>;

  const gamesResults = [...games.results];
  const gamesWithPrices = [...gamesResults].map((game, idx) => ({
    ...game,
    price: prices[idx],
  }));

  const cartQuantity = cartGames.reduce(
    (quantity, game) => game.quantity + quantity,
    0
  );

  function getGameQuantity(id: number) {
    return cartGames.find((game) => game.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartGames((prevGames) => {
      if (prevGames.find((game) => game.id === id) == null) {
        return [...prevGames, { id, quantity: 1 }];
      } else {
        return prevGames.map((game) => {
          if (game.id === id) {
            return { ...game, quantity: game.quantity + 1 };
          } else {
            return game;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartGames((prevGames) => {
      if (prevGames.find((game) => game.id === id)?.quantity === 1) {
        return prevGames.filter((game) => game.id !== id);
      } else {
        return prevGames.map((game) => {
          if (game.id === id) {
            return { ...game, quantity: game.quantity - 1 };
          } else {
            return game;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartGames((prevGames) => {
      return prevGames.filter((game) => game.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getGameQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartGames,
        cartQuantity,
        games: gamesWithPrices,
        isLoading,
        isError,
      }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
}
