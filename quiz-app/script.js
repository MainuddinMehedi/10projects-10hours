const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2023?',
        a: 'Java',
        b: 'C',
        c: 'Javascript',
        d: 'Python',
        correct: 'c'
    }, {
        question: 'Who is the president of Bangladesh?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Sheikh Marjina',
        d: 'Sehikh Hasina'
    }, {
        question: 'What does HTML stands for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was Javascript launched?',
        a: '1989',
        b: '1947',
        c: '1977',
        d: 'None of the above',
        correct: 'd'
    }
];


const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll(".answer");
const result = document.getElementById('quiz')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()

   const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}



function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEls) => {
        if(answerEls.checked){
            answer = answerEls.id
            
            // console.log(answer)
            // console.log(answers)
            // console.log(quizData[0].correct)
            // console.log(answers.labels[0].innerText)
            // if (answers.labels[0].innerText == quizData[0].correct) {
            //     console.log('right answer');
            // } else {
                // console.log('wrong');
            // } 
        } 
    })
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEls) => {
        answerEls.checked = false;
    })
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            result.innerHTML = `<h2> You answered correctly ${score} out of ${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`
        }
    }
})