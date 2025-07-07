import { Router } from 'express';
const router = Router();
import {
  getAllQuestionsWithOptions,
  groupByQuestion,
  saveSession,
  saveAnswer,
  getSessionResults,
} from '../db/queries.js';
// import { generateQuizQuestion } from '../services/openai.js'


router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './views' });
});

router.get('/cookies', (req, res) => {
  res.sendFile('cookies.html', { root: './views' });
});

router.post('/accept-cookies', async (req, res) => {
  const sid = req.sessionID;
  const sessionData = { quizAccepted: true };
  const expiry = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes

  try {
    await saveSession(sid, sessionData, expiry);
    req.session.quizAccepted = true; // still sets session in memory
    res.sendStatus(200);
  } catch (err) {
    console.error('Error creating session:', err);
    res.sendStatus(500);
  }
});

router.get('/quiz', (req, res) => {
  res.sendFile('quiz.html', { root: './views' });
});


router.get('/quiz-data', async (req, res) => {
  try {
    const raw = await getAllQuestionsWithOptions();
    const questions = groupByQuestion(raw);

    res.json({ questions }); 
  } catch (err) {
    console.error('Error fetching quiz data', err);
    res.status(500).json({ error: 'Failed to load quiz' });
  }
});

// router.get('/generate', async (req, res) => {
//   try {
//     const quiz = await generateQuizQuestion();
//     res.json(quiz);
//   } catch (err) {
//     console.error('Failed to generate quiz:', err);
//     res.status(500).json({ error: 'Failed to generate quiz question' });
//   }
// });


router.post('/answer', async (req, res) => {
  const sid = req.sessionID;
  const { questionId, selectedOption } = req.body;

  try {
    await saveAnswer(sid, questionId, selectedOption);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error saving answer:', err);
    res.sendStatus(500);
  }
});

router.get('/results', (req, res) => {
  res.sendFile('results.html', { root: './views' });
});

router.get('/result', async (req, res) => {
  const sid = req.sessionID;

  try {
    const result = await getSessionResults(sid);
    res.json(result);
  } catch (err) {
    console.error('Error getting results:', err);
    res.sendStatus(500);
  }
});




// router.get('/test-db', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT NOW()');
//     res.json({ success: true, time: result.rows[0].now });
//   } catch (err) {
//     console.error('Database error:', err);
//     res.status(500).json({ success: false, error: err.message });
//   }
// });



export default router;
