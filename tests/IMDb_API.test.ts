import {getMovies, getRandomMovie} from "../utils/imdb.api.connection";


test("IMDB basic connection test", async () => {
    const items = await getMovies();
    //getMovies() should not throw
    expect(async () => await getMovies()).not.toThrow();
    //returned value should be instaceof Array
    expect(items instanceof Array).toEqual(true);
    //returned array should have 250 elements
    expect(items.length).toEqual(250);
})
test("Get random movie test", async () => {
    //getRandomMovie() should not throw
    expect(async () => await getRandomMovie()).not.toThrow();
    // console.log(await getRandomMovie());
})