const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const resultsButton = document.getElementById('results-btn')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionContainerElement = document.getElementById('question-container')
const resultContainerElement = document.getElementById('result-container')
const resultMessage = document.getElementById('result-msg')
const questionElement = document.getElementById('question')

let shuffledQuestions, currentQuestionIndex, correctAnswers;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
    
});
resultsButton.addEventListener('click', () => {
    calculateResults();
})

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    resultsButton.classList.add('hide');
    resultContainerElement.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (correct) {
        correctAnswers++;
        console.log(correctAnswers);
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
        resultsButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function calculateResults() {
    clearStatusClass(document.body);
    questionContainerElement.classList.add('hide');
    resultContainerElement.classList.remove('hide');
    resultsButton.classList.add('hide');
    startButton.innerText = 'Restart';

    let answeredQuestions = currentQuestionIndex + 1;
    let score = Math.floor(correctAnswers / answeredQuestions * 100);
    
    let scoreText = '';

    switch (true) {
        case score >= 0 && score <= 50:
            scoreText = `😐 You scored ${score}%. Please try again. You've got this!`;
            break;
        case score > 50 && score <= 70:
            scoreText = `😌 You scored ${score}%! Way to go!`;
            break;
        case score > 70 && score <= 90:
            scoreText = `😇 You scored ${score}%! Great result!`;
            break;
        case score === 100:
            scoreText = `🤩 Brilliant result: ${score}%. Congratulations!`;
            break;
        default:
            scoreText = `Your score: ${score}%`;
    }

    resultMessage.innerText = scoreText;
}

const questions = [
    {
        question: "What is 2+2?",
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '12', correct: false },
            { text: '5', correct: false}
        ]
    },
    {
        question: "What is 2+3",
        answers: [
            { text: '5', correct: true },
            { text: '6', correct: false },
            { text: '7', correct: false },
            { text: '12', correct: false}
        ]
    },
    {
        question: "What is 3+7?",
        answers: [
            { text: '1', correct: false },
            { text: '12', correct: false },
            { text: '10', correct: true },
            { text: '6', correct: false}
        ]
    },
    {
        question: "What is 22+12?",
        answers: [
            { text: '44', correct: false },
            { text: '32', correct: false },
            { text: '34', correct: true },
            { text: '36', correct: false}
        ]
    },
    {
        question: "What is 7*6?",
        answers: [
            { text: '42', correct: true },
            { text: '36', correct: false },
            { text: '48', correct: false },
            { text: '50', correct: false}
        ]
    },
    {
        question: "What is 126/18?",
        answers: [
            { text: '6', correct: false },
            { text: '8', correct: false },
            { text: '9', correct: false },
            { text: '7', correct: true}
        ]
    }
]

// TODO Shuffled answers
// TODO Results should provide not only the subtotal score, but give a feedback about the user's choice.
// *For example, I can include an additional property "explanation" inside the answers' objects that should show next to each question that will be displayed in the result scenario.