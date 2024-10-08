import { useLocation } from "react-router-dom"

export const useGetParams = (key: string) => {
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    return query.get(key)
}