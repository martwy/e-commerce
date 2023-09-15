import useSWR from "swr";

export const useGamesNames = (gamesNames: string[] | undefined) => {
  const { data, isLoading } = useSWR(
    gamesNames
      ? {
          url: "https://www.cheapshark.com/api/1.0/games?title=",
          names: gamesNames,
        }
      : null,
    ({ url, names }) =>
      Promise.all(
        names.map((name: string) =>
          fetch(
            `https://www.cheapshark.com/api/1.0/games?title=${name}&exact=1`
          ).then((res) => res.json())
        )
      )
  );

  return {
    prices: data,
    isLoadingPrice: isLoading,
  };
};
