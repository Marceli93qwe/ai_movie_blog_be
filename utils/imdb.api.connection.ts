import fetch from 'node-fetch'; //v2 for possibility to compile to commonjs
import dotenv from "dotenv";
import {ReviewRecord} from "../records/Review.record";

dotenv.config();
const apiKey = process.env.IMDB_API_KEY;

//interface for data coming from IMDB API, we want it only in this file
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

type MovieList = Movie[];

//Returns the list of all top250Movies from imdb API

export const getMovies = async (): Promise<MovieList> => {
    try {

        const response = await fetch(`https://imdb-api.com/API/Top250Movies/${apiKey}`);
        const {items} = (await response.json() as { items: MovieList, errorMessage: string });
        return items;
    } catch (error) {
        throw new Error("Error while accessing data from IMDB API " + error.message);
    }
}


export const getRandomMovie = async (): Promise<Movie> => {
    try {
        //get ids of already done reviews
        const ids = await ReviewRecord.getAllIds();
        //get all the movies from api and filters out those that have already been reviewed
        const allMoviesNotDoneReview = (await getMovies()).filter(movie => !ids.includes(movie.id));
        //draws one of the filtered
        return allMoviesNotDoneReview[Math.floor(Math.random() * allMoviesNotDoneReview.length)];
    } catch (err) {
        throw new Error("Error in getRandomMovie() " + err.message);
    }
}
