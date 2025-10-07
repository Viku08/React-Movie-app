import {createContext , useState, useEffect,useContext} from "react";
const movieContext = createContext();
export const useMovieContext = () => useContext(movieContext);

export const MovieProvider =({children}) =>{
    const[favorites,setFavorties] = useState([]);
    
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if(storedFavs) setFavorties(JSON.parse(storedFavs))
    },[])

    useEffect(() =>{
        localStorage.setItem("favorites", JSON.stringify(favorites))
    },[favorites])

    const addToFavorites = (movie) => {
        setFavorties((prev => [...prev,movie]))
    }

    const removeFromFavorties = (movieId) =>{
        setFavorties((prev) => prev.filter(movie => movie.id !== movieId ))
    }

    const isFavorites = (movieId) =>{
        return favorites.some(movie => movie.id === movieId)
    }
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorties,
        isFavorites
    }

    return <movieContext.Provider value ={value}>
        {children}
    </movieContext.Provider>
}