import {getMovies} from "../utils/imdb.api.connection";


test("IMDB basic connection test", async () => {
    const items = await getMovies();
    expect(async () => await getMovies()).not.toThrow();
    expect(items instanceof Array).toEqual(true);
    expect(items.length).toEqual(250);

    //@TODO Think over the tests to this API
})