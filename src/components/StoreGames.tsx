import { useGames } from '../hooks/useGames';
import Game from './Game';
import { Game as GameType } from '../utils/Game';
export default function StoreGames() {
    const { games, isLoading, isError } = useGames()
    console.log(games);
    if (isLoading) return <div>loading...</div>
  return (
    <div className='flex justify-center flex-wrap gap-8 mt-6 bg-slate-950'>
    {games.results.map((game:GameType) => 
    <Game 
        name={game.name} 
        released={game.released} 
        background_image={game.background_image}
        metacritic={game.metacritic}
        />)}
    </div>
  )
}
