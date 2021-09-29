// variables declaration
let questionNumber = 0;
let score = 0;

// get elements from Ui template 
const questionElement = document.getElementById('question_item');
const questionnaires = document.getElementById('questionnaires');
const a_choiceElement = document.getElementById('a_choice');
const b_choiceElement = document.getElementById('b_choice');
const c_choiceElement = document.getElementById('c_choice');
const d_choiceElement = document.getElementById('d_choice');
const answerElement = document.querySelectorAll('.answer');
const submitButton = document.getElementById('submit');

// questions store 
const questionsStore = [
    {
        question: 'Who is the current president of Ethiopia?',
        a: 'Meles Zenawi',
        b: 'Abiy Ahmed',
        c: 'Haylemariam deselegn',
        d: 'Lemma megersa',
        answer: 'b'
    },
    {
        question: 'Who is current president of America?',
        a: 'kamala Harris',
        b: 'Donald Trump',
        c: 'Barack Obama',
        d: 'Joe Biden',
        answer: 'd'
    },
    {
        question: 'Which one is capital city of Canada?',
        a: 'Brussels',
        b: 'Ottawa',
        c: 'Brasilia',
        d: 'Cairo',
        answer: 'b'
    },
    {
        question: 'Which one is not a continent?',
        a: 'Africa',
        b: 'North America',
        c: 'Awurope',
        d: 'China',
        answer: 'd'
    },
    {
        question: 'Which country have a largest population?',
        a: 'Ethiopia',
        b: 'Hindi',
        c: 'China',
        d: 'Brazil',
        answer: 'c'
    },
    {
        question: 'Which country is located in Africa continent?',
        a: 'Egypt',
        b: 'Cuba',
        c: 'Chile',
        d: 'Mexico',
        answer: 'a'
    }

];

function fetchQuestion() {
    deselectDefaultAnswer();
    const questionNemberData = questionsStore[questionNumber];
    questionElement.innerText = questionNemberData.question;
    a_choiceElement.innerText = questionNemberData.a;
    b_choiceElement.innerText = questionNemberData.b;
    c_choiceElement.innerText = questionNemberData.c;
    d_choiceElement.innerText = questionNemberData.d;


}

// get selected answer and check the answer filled first before submitted
const getAnswer = () => {
    let choiceValue = undefined;
    answerElement.forEach((choice) => {
        console.log(choice.value);
        if (choice.checked) {
            choiceValue = choice.id;
            return choiceValue;
        }
    });
    return choiceValue;
}

// to clear the default select choices
const deselectDefaultAnswer = () =>{
    answerElement.forEach((choice)=>{
        choice.checked = false;
    });
}

// initial call
fetchQuestion();

// add evenlistner to submit button
submitButton.addEventListener('click', () => {
    // check the answer
    const answer = getAnswer();
    if (answer) {
        if(answer === questionsStore[questionNumber].answer){
            score++;
        }
        console.log(answer,score);
        questionNumber++;
        if (questionNumber < questionsStore.length) {
            fetchQuestion();
        } else {
            questionnaires.innerHTML=`<h2> You answered correctly at ${score}/${questionsStore.length} questions.</h2> <br> 
            <button onclick="location.reload()">Reload</button>`;
            // alert('You finished the quiz successfully');

        }
    }


});