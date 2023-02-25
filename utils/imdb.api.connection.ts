import fetch from 'node-fetch'; //v2 for possibility to compile to commonjs
import dotenv from "dotenv";

dotenv.config();
const apiKey = process.env.IMDB_API_KEY;

interface Movie {
    id: string;
    rank: string;
    title: string;
    fullTitle: string;
    year: string;
    image: string;
    crew: string;
    imDbRating: string;
    imDbRatingCount: string;
}

//Returns the list of all top250Movies from imdb API

export const getMovies = async () => {
    try {

        const response = await fetch(`https://imdb-api.com/API/Top250Movies/${apiKey}`);
        const {items} = (await response.json() as { items: Movie[], errorMessage: string });
        return items;
    } catch (error) {
        throw new Error("Error while accessing data from IMDB API " + error.message);
    }
}
