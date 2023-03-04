//THIS is the devtool
import {getMovies} from "../utils/imdb.api.connection";
import {findMax} from "./findMax";

//Names of all property of data from imDb API

type propertyNames =
    "id"
    | "rank"
    | "title"
    | "fullTitle"
    | "year"
    | "image"
    | "crew"
    | "imDbRating"
    | "imDbRatingCount";


//Checks the biggest length for each property across all objects fetch from the imdb API

//If any content on the page is truncated, it is worth checking if the maximum
//length in the API is not greater than the character limit set in the database

export const CheckMoviePropertiesMaxLength = async (): Promise<string[]> => {
    const movies = await getMovies();
    const keys = Object.keys(movies[0]); // an array of object "Movie" (from imdb api) property names
    const results = [];
    for (const key of keys) {
        const mappedToPropertyLength = movies.map(movie => movie[`${key}` as propertyNames].length);
        const maxOfProperty = findMax(mappedToPropertyLength);
        results.push(`${key}: ${maxOfProperty}`);
    }
    return results;
}

