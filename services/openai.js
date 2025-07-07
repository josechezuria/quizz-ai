// import { OpenAI } from "openai";
// import dotenv from "dotenv";
// dotenv.config();

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// export async function generateQuizQuestion() {
//   const prompt = `Generate one multiple-choice trivia question for a Gen Z audience. Make it funny, chaotic, and slightly brainrot, but still answerable. The topic can be anything: science, history, pop culture, memes, or something completely random. Include 3–5 answer options and clearly mark which one is correct.

// Return the result in this exact JSON format:

// {
//   "prompt": "[Your question here]",
//   "options": [
//     {"label": "A", "content": "[option]", "is_correct": false},
//     {"label": "B", "content": "[option]", "is_correct": true}
//   ]
// }

// Keep the humor dumb-smart. Think TikTok meets trivia night in a college dorm.`;

//   const res = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo", 
//     messages: [{ role: "user", content: prompt }],
//     temperature: 0.7,
//   });

//   const raw = res.choices[0].message.content;

//   try {
//     // If it’s clean JSON, this works
//     return JSON.parse(raw);
//   } catch (e) {
//     // Try to extract the JSON part if GPT adds text before/after
//     const jsonMatch = raw.match(/\{[\s\S]*\}/);
//     if (jsonMatch) {
//       return JSON.parse(jsonMatch[0]);
//     } else {
//       throw new Error("Failed to parse quiz JSON:\n" + raw);
//     }
//   }
// }
