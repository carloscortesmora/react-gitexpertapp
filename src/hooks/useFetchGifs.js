import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = category => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        async function fetchData() {
            const gifs = await getGifs(category);
            setstate({
                data: gifs,
                loading: false
            });
        }
        fetchData();
    }, [category]);

    return state;
}