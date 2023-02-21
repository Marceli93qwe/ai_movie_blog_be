import {createPool} from "mysql2/promise";


export const pool = createPool({
    host: "localhost",
    database: "ai_movie_blog",
    user: "root",
    namedPlaceholders: true,
    decimalNumbers: true,
});