# 🧠 Quizz.AI

Gen Z’s favorite brainrot quiz app — powered by memes, chaos, and eventually OpenAI.

## 🚀 Live Demo

> Coming soon (when deployed)

## 📚 Description

Quizz.AI is a dynamic trivia web app that delivers chaotic and funny multiple-choice questions for Gen Z users. Built with a full-stack approach, questions are served from a PostgreSQL database and scored in real-time. OpenAI integration for AI-generated questions is ready for future implementation.

## 🔧 Tech Stack

- Frontend: HTML, Sass, JavaScript (jQuery)
- Backend: Node.js, Express
- Database: PostgreSQL
- Styling: Responsive CSS with Flexbox and Grid
- Animations: Anime.js
- AI (Coming soon): OpenAI API

## 💡 Features

- Dynamic quiz generation
- Realtime scoring
- Timer animation using Anime.js
- Gen Z–styled humor and UI
- Responsive layout
- Modular file structure
- Ready for OpenAI integration (GPT quiz generation)

## 🛠️ Setup Instructions

```bash
git clone https://github.com/josechezuria/Quizz.AI.git
cd Quizz.AI
npm install
npm run dev
Make sure to have PostgreSQL running and create your .env file:

ini
Copy
Edit
PORT=3000
DATABASE_URL=postgres://your_username:your_password@localhost:5432/quizdb
OPENAI_API_KEY=sk-... (optional for now)
Run the mock data seeder (mock-data.sql) to populate the quiz with sample questions.

📦 Folder Structure
arduino
Copy
Edit
📁 public/
📁 routes/
📁 db/
📁 services/
📁 views/
📁 sass/
📁 js/
.env
app.js
💭 Future Plans
Full OpenAI question generation

Leaderboard + user sessions

Theme customization

Shareable results

🧑‍💻 Author
Made with caffeine and chaos by @josechezuria

yaml
Copy
Edit

---

Let me know if you also want a `mock-data.sql` file included in the repo officially. We can also add a deployment section once you pick your hosting provider (Render, Railway, etc.).






Ask ChatGPT
