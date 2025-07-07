$(document).ready(async function () {
  try {
    const res = await $.get('/quiz/result'); 
    const { correct, total } = res;
    $('#scoreText').text(`${correct}/${total}`);
  } catch (err) {
    console.error('Error loading results:', err);
    $('#scoreText').text('Error');
  }
});
