import {pool} from "../utils/db";

test("db connection test", async () => {
    expect(async () => await pool.execute("INSERT INTO `reviews`(`id`) values (\"123\")")).not.toThrow()
    console.log(await pool.execute("select `id` from `reviews`"));
})
