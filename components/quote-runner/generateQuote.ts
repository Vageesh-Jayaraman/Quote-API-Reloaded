const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env.local" });

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function generateResponse() {
    try {
        const prompt = "Generate a unique and thought-provoking quote that is inspiring and profound. The quote should be original, concise (under 30 words), and impactful. It can be about life, success, creativity, or human nature.  ";
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        return "The great thing in this world is not so much where we are, but in what direction we are going."
    }
}

generateResponse();
