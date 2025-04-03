const questions = [
    {question: "What is the 2nd highest mountain in the World?", options: ["K2","Everest","Fuji","Turch Mir"], answer: "K2"}, {question: "Which is the highest building in the World?", options: ["Empire State","Burj Khalifa","The Shard","Shanghai Tower"], answer: "Burj Khalifa"}
]

let currentQuestionIndex = 0
let score = 0

function loadQuestion() {
    const questionElement = document.getElementById('question')
    const optionsElement = document.getElementById('options')

    questionElement.textContent = questions[currentQuestionIndex].question
    optionsElement.innerHTML = ""

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => {checkAnswer(option)};
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }
    document.querySelectorAll('.options button').forEach(button => button.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    }else {
        document.querySelector('.container').innerHTML = `<h2>🎉Quiz Completed🥳</h2><h3>Your Score is: ${score}/${questions.length}</h3>`;
    }
}

loadQuestion()