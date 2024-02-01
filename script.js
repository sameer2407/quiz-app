let question=document.querySelector('.question');
let answer=document.querySelectorAll('.btn');
let next=document.querySelector('#next');
const questions = [
    {
        question: "What is the SI unit of force?",
        answers: [
            { text: "Newton", correct: true },
            { text: "Joule", correct: false },
            { text: "Watt", correct: false },
            { text: "Pascal", correct: false },
        ]
    },
    {
        question: "What is the acceleration due to gravity on Earth?",
        answers: [
            { text: "10 m/s²", correct: false },
            { text: "8.8 m/s²", correct: false },
            { text: "9 m/s²", correct: false },
            { text: "9.8 m/s²", correct: true },
        ]
    },
    {
        question: "What is the formula for Ohm's Law?",
        answers: [
            { text: "P = IV", correct: false },
            { text: "V = I²R", correct: false },
            { text: "P = VI", correct: false },
            { text: "V = IR", correct: true },
        ]
    },
    {
        question: "What is the SI unit of electric charge?",
        answers: [
            { text: "Ampere", correct: false },
            { text: "Coulomb", correct: true },
            { text: "Ohm", correct: false },
            { text: "Volt", correct: false },
            
        ]
    },
    {
        question: "What is the formula for kinetic energy?",
        answers: [
            { text: "mgh", correct: false },
            { text: "F = ma", correct: false },
            { text: "W = Fd", correct: false },
            { text: "1/2 mv²", correct: true },
        ]
    },
    {
        question: "What is the process by which a liquid changes into a gas?",
        answers: [
            { text: "Condensation", correct: false },
            { text: "Sublimation", correct: false },
            { text: "Evaporation", correct: true },
            { text: "Freezing", correct: false },
            
        ]
    },
    {
        question: "What is the unit of electric current?",
        answers: [
            { text: "Ampere", correct: true },
            { text: "Coulomb", correct: false },
            { text: "Volt", correct: false },
            { text: "Watt", correct: false },
            
        ]
    },
    {
        question: "What is the SI unit of power?",
        answers: [
            { text: "Joule", correct: false },
            { text: "Ampere", correct: false },
            { text: "Watt", correct: true },
            { text: "Ohm", correct: false },
            
        ]
    },
    {
        question: "What is the law that states that the total electric flux through a closed surface is equal to the charge enclosed by the surface?",
        answers: [
            { text: "Newton's Law", correct: false },
            { text: "Coulomb's Law", correct: false },
            { text: "Ohm's Law", correct: false },
            { text: "Gauss's Law", correct: true },
        ]
    },
    {
        question: "What is the phenomenon where light waves change direction when passing from one medium to another?",
        answers: [
            { text: "Reflection", correct: false },
            { text: "Refraction", correct: true },
            { text: "Diffraction", correct: false },
            { text: "Interference", correct: false },
            
        ]
    },
    {
        question: "What is the SI unit of capacitance?",
        answers: [
            { text: "Farad", correct: true },
            { text: "Henry", correct: false },
            { text: "Ohm", correct: false },
            { text: "Joule", correct: false },
            
        ]
    },
    {
        question: "What is the law that states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
        answers: [
            { text: "Charles's Law", correct: false },
            { text: "Gay-Lussac's Law", correct: false },
            { text: "Avogadro's Law", correct: false },
            { text: "Boyle's Law", correct: true },
        ]
    },
    {
        question: "What is the process by which an atom emits radiation?",
        answers: [
            { text: "Radioactive Decay", correct: true },
            { text: "Nuclear Fusion", correct: false },
            { text: "Nuclear Fission", correct: false },
            { text: "Electron Capture", correct: false },
            
        ]
    },
    {
        question: "What is the SI unit of frequency?",
        answers: [
            { text: "Watt", correct: false },
            { text: "Ampere", correct: false },
            { text: "Coulomb", correct: false },
            { text: "Hertz", correct: true },
        ]
    },
    {
        question: "What is the law that states that the current flowing through a conductor is directly proportional to the voltage across it?",
        answers: [
            { text: "Kirchhoff's Law", correct: false },
            { text: "Ohm's Law", correct: true },
            { text: "Faraday's Law", correct: false },
            { text: "Coulomb's Law", correct: false },
            
        ]
    },
    {
        question: "What is the phenomenon where a wave spreads out when passing through an opening?",
        answers: [
            { text: "Refraction", correct: false },
            { text: "Reflection", correct: false },
            { text: "Diffraction", correct: true },
            { text: "Interference", correct: false },
            
        ]
    },
    {
        question: "What is the process by which heat is transferred through a material by the movement of the material itself?",
        answers: [
            { text: "Conduction", correct: false },
            { text: "Radiation", correct: false },
            { text: "Insulation", correct: false },
            { text: "Convection", correct: true },
        ]
    },
    {
        question: "What is the law that states that the total energy of an isolated system remains constant over time?",
        answers: [
            { text: "Law of Conservation of Energy", correct: true },
            { text: "Newton's Law of Motion", correct: false },
            { text: "Faraday's Law", correct: false },
            { text: "Coulomb's Law", correct: false },
            
        ]
    },
    {
        question: "What is the phenomenon where a wave bounces back after hitting a surface?",
        answers: [
            { text: "Refraction", correct: false },
            { text: "Diffraction", correct: false },
            { text: "Interference", correct: false },
            { text: "Reflection", correct: true },
        ]
    },
    {
        question: "What is the SI unit of temperature?",
        answers: [
            { text: "Kelvin", correct: true },
            { text: "Celsius", correct: false },
            { text: "Fahrenheit", correct: false },
            { text: "Rankine", correct: false },
            
        ]
    },
];
let currentIndex=0;
let score=0;
let isAnswer=false;
function beginQuiz(){
    currentIndex=0;
    score=0;
    question.innerText=`${currentIndex+1}. ${questions[currentIndex].question}`;
    for(let i=0;i<4;i++){
        answer[i].innerText=questions[currentIndex].answers[i].text;
    }
}

 function resetButtonColors() {
    for (let i = 0; i < 4; i++) {
        answer[i].style.background = '#55c2da'; 
    }
    for (let j = 0; j < 4; j++) {
        answer[j].disabled = false;
    }
}

function nextQues() {
    if (isAnswer) {
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            question.innerText=`${currentIndex+1}. ${questions[currentIndex].question}`;
            for (let i = 0; i < 4; i++) {
                answer[i].innerText = questions[currentIndex].answers[i].text;
            }
            resetButtonColors();
            isAnswer = false;
        } else {
            
            question.innerText = "Your Score: " + score + "/" + questions.length;
            for (let i = 0; i < 4; i++) {
                answer[i].style.display = "none"; 
            }
            next.innerText = "Try Again";
        }
    }
}

function resetQuiz() {
    currentIndex = 0;
    score = 0;
    isAnswer = false;
    beginQuiz(); 
    next.innerText = "Next"; 
    for (let i = 0; i < 4; i++) {
        answer[i].style.display = "block"; 
    }
    resetButtonColors();
}



function showAnswer(choosenAns) {
        let correctAnswer;
        for (let i = 0; i < 4; i++) {
            if (questions[currentIndex].answers[i].correct) {
                correctAnswer = i;
                break;
            }
        }
        if (choosenAns === correctAnswer) {
            answer[choosenAns].style.background = 'green';
            score++;
        } else {
            answer[choosenAns].style.background = 'red';
            answer[correctAnswer].style.background = 'green';
        }
        disableOptions(); 
        isAnswer=true;
    }

function disableOptions() {
    for (let j = 0; j < 4; j++) {
        answer[j].disabled = true;
    }
}
beginQuiz();
for (let i = 0; i < 4; i++) {
    answer[i].addEventListener('click', function() {
        showAnswer(i);
    });
}

next.addEventListener('click', function () {
    if (next.innerText === "Try Again") {
        resetQuiz();
    } else {
        nextQues();
    }
});



