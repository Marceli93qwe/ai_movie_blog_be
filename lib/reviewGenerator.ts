//assumptions
//review generator should get movies list from the imDb API
//it should filter this list so that there are only movies that haven't been reviewed yet
//for this purpose, it should fetch the list of review ids that we already have in the database,
//and check if they match
//After that, it should query the openai API, asking for review
//Then we just have to make an Review.Record based on this data and insert it to the db


import {getRandomMovie} from "../utils/imdb.api.connection";
import {ReviewRecord} from "../records/Review.record";
import {runCompletion} from "../utils/openAI.api.connection";

export async function reviewGenerator() {
    try {
        const movieToDoReview = await getRandomMovie();
        // const review = await runCompletion("Do you like the movie Frozen?");
        const review = await runCompletion(`Write a review of a movie called "${movieToDoReview.title}" that has maximum 950 chars`);
        const reviewRecord = new ReviewRecord(
            movieToDoReview.id,
            Number(movieToDoReview.rank),
            movieToDoReview.title,
            movieToDoReview.fullTitle,
            Number(movieToDoReview.year),
            movieToDoReview.image,
            movieToDoReview.crew,
            Number(movieToDoReview.imDbRating),
            Number(movieToDoReview.imDbRatingCount),
            review,
        )
        return reviewRecord;
    } catch (err) {
        throw new Error(`Error occurred in reviewGenerator ` + err.message);
    }

}