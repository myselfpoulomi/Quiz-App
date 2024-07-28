const questions = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "Hyperlinking Text Management Language",
        correct: "a",
    },
    {
        question: "Which HTML element is used for the largest heading?",
        a: "<h1>",
        b: "<heading>",
        c: "<h6>",
        d: "<head>",
        correct: "a",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<br>",
        b: "<lb>",
        c: "<break>",
        d: "<ln>",
        correct: "a",
    },
    {
        question: "Which HTML element is used to define a hyperlink?",
        a: "<a>",
        b: "<link>",
        c: "<href>",
        d: "<hyperlink>",
        correct: "a",
    },
    {
        question: "How can you make a numbered list in HTML?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<dl>",
        correct: "b",
    },
    {
        question: "What is the correct HTML element for inserting an image?",
        a: "<img>",
        b: "<picture>",
        c: "<image>",
        d: "<src>",
        correct: "a",
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        a: "alt",
        b: "title",
        c: "src",
        d: "href",
        correct: "a",
    },
    {
        question: "Which doctype is correct for HTML5?",
        a: "<!DOCTYPE html>",
        b: "<!DOCTYPE HTML5>",
        c: "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 5.0//EN\">",
        d: "<!DOCTYPE HTML SYSTEM>",
        correct: "a",
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        a: "<footer>",
        b: "<bottom>",
        c: "<section>",
        d: "<end>",
        correct: "a",
    },
    {
        question: "How can you open a link in a new tab/browser window?",
        a: "<a href=\"url\" new>",
        b: "<a href=\"url\" target=\"_blank\">",
        c: "<a href=\"url\" target=\"new\">",
        d: "<a href=\"url\" open=\"new\">",
        correct: "b",
    }
];

let index = 0;
let total = questions.length;
let correct = 0;
let incorrect = 0;
const btn = document.querySelector(".btn");
const queBox = document.getElementById("quebox");
const optionInput = document.querySelectorAll("input[type='radio']");

const loadQus = () => {
    if (total==index) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    queBox.innerHTML = `${index+1}) ${data.question}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[0].value = "a";
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[1].value = "b";
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[2].value = "c";
    optionInput[3].nextElementSibling.innerText = data.d;
    optionInput[3].value = "d";
}


const getAns = () => {
    let ans = null;
    optionInput.forEach((input) => {
        if (input.checked) {
            ans = input.value;
        }
    });
    return ans;
};

const reset = () => {
    optionInput.forEach(
        (inputi) => {
            inputi.checked = false;
        }
    );
};

const endQuiz = () => {
    document.querySelector("#box").innerHTML = `
    <div style ="text-align:center ; width :300px">
        <h3>Quiz completed!</h3>
        <p style="margin-top : 5px">Right answers: ${correct}</p>
        <p style="margin-top : 5px">Wrong answers: ${incorrect}</p>
    `;
};



const submitQuiz = () => {
    if (index >= total) {
        return endQuiz();
    }

    const data = questions[index];

    if (!data) {
        console.error(`Question data is undefined at index: ${index}`);
        return;
    }

    console.log(`Correct answer for question ${index + 1}: ${data.correct}`);
    
    const ans = getAns();

    if (!ans) {
        console.warn('No answer selected');
        return;
    }

    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQus();
};


btn.addEventListener("click" , submitQuiz);



loadQus();
