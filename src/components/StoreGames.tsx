import Game from "./Game";
import { Game as GameType } from "../utils/Game";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function StoreGames() {
  const { games } = useShoppingCart();
  return (
    <div className="flex flex-wrap w-full justify-center gap-8 bg-slate-950">
      {games.map((game: GameType) => (
        <Game
          key={game.id}
          id={game.id}
          name={game.name}
          released={game.released}
          background_image={game.background_image}
          metacritic={game.metacritic}
          price={game.price}
        />
      ))}
    </div>
  );
}
