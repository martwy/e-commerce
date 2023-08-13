import useSWR from 'swr'

export const useGames = () => {
    const API = "https://api.rawg.io/api/games?key=e75bdf42b8ea43e5bd76af97ba42c1b1";
    const fetcher = () => fetch(API).then(res => res.json())

    const { data, error, isLoading } = useSWR(API, fetcher)
    
    return {
        games : data,
        isLoading,
        isError: error
    }
}
