const quizData = [
    {
        question: 'How old am I?',

        a: '10',
        b: '17',
        c: '21',
        d: '32',
        correct: 'c' 
    },
    {
        question: 'When do I graduate?',
        a: '2021',
        b: '2034',
        c: '2012',
        d: '2022',
        correct: 'd'
    },
    {
        question: 'What is my favorite color?',
        a: 'Green',
        b: 'Blue',
        c: 'Yellow',
        d: 'Purple',
        correct: 'b'
    },
    {
        question: 'What is my favorite food?',
        a: 'Orange Chicken',
        b: 'Burben Chicken',
        c: 'Crab Legs',
        d: 'All the above',
        correct: 'd'

    }

]

let currentQuestion = 0; 

const questionEl = document.getElementById('question');
//targets the text for each possible answer
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
loadQuiz();

function loadQuiz() {

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
}

function getSelecteBtn() {
    const answers = document.querySelectorAll("answers");

    answers.forEach((answers) => {
        console.log(answers.value);
    });
}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    }
    else{
        //TODO: Show results
        alert("You have completed the quiz!");
    }

    
})