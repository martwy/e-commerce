import useSWR from "swr";

const API =
  "https://api.rawg.io/api/games?key=e75bdf42b8ea43e5bd76af97ba42c1b1";
const fetcher = () => fetch(API).then((res) => res.json());

// const Prices = (gamesNamesOnly: string[]) => {
//   Promise.all(
//     gamesNamesOnly.map((gameName: string) =>
//       fetch(
//         `https://www.cheapshark.com/api/1.0/games?title=${gameName}&exact=1`
//       ).then(async (response) => {
//         return response.json();
//       })
//     )
//   );
// };

export const useGames = () => {
  const { data: games, error, isLoading } = useSWR(API, fetcher);

  // const { data: prices } = useSWR(
  //   gamesNamesOnly ? ["prices", gamesNamesOnly] : null,
  //   () => Prices(gamesNamesOnly)
  // );

  return {
    // prices,
    games,
    isLoading,
    isError: error,
  };
};
