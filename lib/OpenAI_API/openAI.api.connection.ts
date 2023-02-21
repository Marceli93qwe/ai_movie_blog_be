const {Configuration, OpenAIApi} = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export async function runCompletion(): Promise<string> {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Do you like 'Frozen' movie?",
    });
    // console.log(completion.data.choices[0].text);
    return completion.data.choices[0].text;
}

