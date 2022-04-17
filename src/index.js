// object for Quiz answer and Question  👈

const QuizDB = [
    { 
        question : 'Q1 : There are ___ levels of heading in HTML',
        a : 'Three',
        b : 'Four',
        c : 'Five',
        d : 'Six',
        Ans : 'ans4'
    },
    {
        question : 'Q2 : For a particular font its size attribute can be an absolute value ranging form',
        a : '1-10',
        b : '1-9',
        c : '1-8',
        d : '1-7',
        Ans : 'ans1'
    },
    {
        question : 'Q3 : The purpose of markup is to',
        a : 'add hypertext capabilities',
        b : 'enhance the document',
        c : 'both A & B',
        d : 'none of the above',
        Ans : 'ans3'
    },
    {    
        question : 'Q4 : Which of the following tags do not require a terminator?',
        a : '< u >',
        b : '< br >',
        c : '< b >',
        d : 'none of the above',
        Ans : 'ans2'      
    },
    {
        question : 'Q5 : To get the ordered list we use',
        a : ' < h1 > ',
        b : ' < ul > ',
        c : ' < ol > ',
        d : ' < ml > ',
        Ans : 'ans3'
    }
];

// ================================================================================

// Getting References 
    const answers = document.querySelectorAll('.answer');
    
    const question = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');

    const anscont = document.querySelector('.anscont');
    const scores = document.querySelector('#scores');

// Getting the references of Buttons
    const nextBtn = document.querySelector('#nextBtn');
    const submit = document.querySelector('#submit');

    // initialization
    let QuizCount = 0;
    let score = 0;
    
    // for Loading the Quiz Questions
    const loadingQuiz = () => {
        let QuizList = QuizDB[QuizCount];

        question.innerHTML = QuizList.question;
        option1.innerHTML = QuizList.a;
        option2.innerHTML = QuizList.b;
        option3.innerHTML = QuizList.c;
        option4.innerHTML = QuizList.d;
    }
    
    loadingQuiz();

    // for deselcting the checked state

    const deselectCheck = () => {
        answers.forEach( (currAnsEle) => currAnsEle.checked = false);
    }

    // for Getting ID for match with object Answer
    const getCheckAnswer = () =>{
        let answer;
        answers.forEach( (currAnsEle) => {
            if(currAnsEle.checked){
                answer = currAnsEle.id;
            }
        });
        return answer;
    }
    
    //for Next Button 

    const NextBtn = () => {
        const CheckAnswer = getCheckAnswer();
        console.log(CheckAnswer);

        if (CheckAnswer === QuizDB[QuizCount].Ans){
            // console.log('correct');
            score++;
        }
        QuizCount++;

        if(QuizCount < QuizDB.length){
            loadingQuiz();
        };
        if(QuizCount === QuizDB.length){
            nextBtn.remove();
        };

        deselectCheck();
    }

    // for submiting the Quiz

    const SubmitQuiz = () => {
        // anscont.style.display = 'block';
        anscont.classList.remove('anscontainer');
        scores.innerHTML = ` ${score} / ${QuizDB.length} `;
    }

    submit.addEventListener('click', SubmitQuiz);
    nextBtn.addEventListener('click', NextBtn);