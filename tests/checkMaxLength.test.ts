import {CheckMoviePropertiesMaxLength} from "../devtools/checkMoviePropertiesMaxLength";

test("check max length of all properties test", async () => {
    //CheckMoviePropertiesMaxLength should not throw
    expect(async () => await CheckMoviePropertiesMaxLength()).not.toThrow();
    // console.log(await CheckMoviePropertiesMaxLength());
})