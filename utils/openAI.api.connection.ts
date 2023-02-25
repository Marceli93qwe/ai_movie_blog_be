// const {Configuration, OpenAIApi} = require("openai");
import {Configuration, OpenAIApi} from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, //api key generated and saved on OpenAI account
});
const openai = new OpenAIApi(configuration);

//@TODO update prompt
export async function runCompletion(/*prompt: string*/): Promise<string> {
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Do you like 'Frozen' movie?",
        });
        return completion.data.choices[0].text
    } catch (err) {
        throw new Error("Error while accessing data from OpenAI API " + err.message);
    }
}

