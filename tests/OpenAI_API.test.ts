import {runCompletion} from "../lib/OpenAI_API/openAI.api.connection";

test("OpenAI_API_Connection_Test", async () => {
    //runCompletion() should not throw
    expect(async () => await runCompletion()).not.toThrow();
    //runCompletion() should return string value
    expect(typeof await runCompletion()).toBe("string");
})