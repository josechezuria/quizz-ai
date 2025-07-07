
let currentQuestionIndex = 0;
let questions = [];
let timerInterval;

$(document).ready(async function () {
  try {
    const res = await $.get("/quiz/quiz-data");
    questions = res.questions;
    renderQuestion();
  } catch (err) {
    console.error("Failed to load quiz data:", err);
  }

  $("#nextQuestion").click(function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
      renderQuestion();
    } else {
      window.location.href = "/quiz/results";
    }
  });
});

function renderQuestion() {
  const question = questions[currentQuestionIndex];

  const questionHTML = `
    <h2 class="question-title">${question.prompt}</h2>
    ${question.options
      .map(
        (opt) => `
      <button class="option-card" data-option-id="${opt.id}" data-label="${opt.label}">
        <div class="option-content">
          <div class="option-letter-box">
            <p class="option-letter">${opt.label}</p>
          </div>
          <p class="option-text">${opt.content}</p>
        </div>
      </button>
    `
      )
      .join("")}
  `
  

  $("#quizContent").html(questionHTML);
  $("#nextQuestion").hide();

  $(".option-card").click(async function () {
    const selectedOption = $(this).data("option-id");
    const questionId = question.id;

    try {
      await $.post("/quiz/answer", {
        questionId,
        selectedOption,
      });

      $(".option-card").off("click");

      question.options.forEach((opt) => {
        const selector = `.option-card[data-option-id="${opt.id}"]`;
        if (opt.is_correct) {
          $(selector).addClass("correct");
        } else {
          $(selector).addClass("wrong");
        }
      });

      $("#nextQuestion").show();
    } catch (err) {
      console.error("Error submitting answer:", err);
    }
  });

  startTimer();
}

function startTimer() {
  let timeLeft = 60;

  $('#timerProgress').css('width', '100%');
  $('#timer').text(timeLeft);

  anime({
    targets: '#timerProgress',
    width: '0%',
    duration: timeLeft * 1000,
    easing: 'linear',
  });

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    $('#timer').text(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      $('#nextQuestion').show();
    }
  }, 1000);
}
