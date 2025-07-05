import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './views' });
});

router.get('/cookies', (req, res) => {
  res.sendFile('cookies.html', { root: './views' });
});

router.get('/quiz', (req, res) => {
  res.sendFile('quiz.html', { root: './views' });
});


router.get('/results', (req, res) => {
  res.sendFile('results.html', { root: './views' });
});

router.get("/check-session", (req, res) => {
  console.log("Session ID:", req.sessionID);
  console.log("Session Data:", req.session);
  res.send("Session info logged.");
});


router.post('/accept-cookies', (req, res) => {
  req.session.quizAccepted = true;
  res.sendStatus(200);
});


export default router;
