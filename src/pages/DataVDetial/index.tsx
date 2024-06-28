import { useLocation } from "react-router-dom"
import { DataVDetailLayout } from "./layout"

export const DataVDetial = () => {
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    console.log("DataVDetial====query=", query.get('id'))

    return (
        <DataVDetailLayout></DataVDetailLayout>
    )
}