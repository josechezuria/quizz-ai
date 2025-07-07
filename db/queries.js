import db from './index.js';


export async function getAllQuestionsWithOptions() {

  const result = await db.query(`
    SELECT q.id AS question_id, q.prompt, o.id AS option_id, o.label, o.content, o.is_correct
    FROM questions q
    JOIN options o ON q.id = o.question_id
    ORDER BY q.id, o.label
  `);

  return result.rows;
}

export function groupByQuestion (rows) {
  const grouped = []

  for (const row of rows) {
    let question = grouped.find(q => q.id === row.question_id)

    if (!question) {
      question = {
        id: row.question_id,
        prompt: row.prompt,
        options: []
      }
      grouped.push(question)
    }

    question.options.push({
      id: row.option_id,
      label: row.label,
      content: row.content,
      is_correct: row.is_correct
    })
  }

  return grouped
}


export async function saveSession(sessionId, sessionData, expirationDate) {
  await db.query(
    `
    INSERT INTO sessions (sid, sess, expire)
    VALUES ($1, $2, $3)
    ON CONFLICT (sid)
    DO UPDATE SET sess = EXCLUDED.sess, expire = EXCLUDED.expire
    `,
    [sessionId, sessionData, expirationDate]
  );
}

export async function saveAnswer(sessionId, questionId, selectedOption) {
  await db.query(
    `
    INSERT INTO answers (session_id, question_id, selected_option)
    VALUES ($1, $2, $3)
    ON CONFLICT (session_id, question_id)
    DO UPDATE SET selected_option = EXCLUDED.selected_option
    `,
    [sessionId, questionId, selectedOption]
  );
}


export async function getSessionResults(sessionId) {
  const result = await db.query(
    `
    SELECT a.selected_option, o.is_correct
    FROM answers a
    JOIN options o ON a.selected_option = o.id
    WHERE a.session_id = $1
    `,
    [sessionId]
  );

  const correctCount = result.rows.filter(r => r.is_correct).length;
  return { correct: correctCount, total: result.rows.length };
}
