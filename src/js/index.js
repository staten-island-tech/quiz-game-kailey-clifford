console.log("connected");
const content = element.innerHTML;
element.innerHTML = htmlString;

const questions = [
  {
    question: "What's your favorite kind of music?",
    A: "I dont know...Ariana Grande I guess",
    B: "I like all music except for wierd music",
    C: "I don't know any kinds of music",
    D: "Whatever music one direction makes",
    correct: "B",
  },
  {
    question: "Who was the best president ever?",
    A: "Obama whatever-his-last-name-was",
    B: "President number #53",
    C:
      "Everybody likes George Washington but I don't really know what he did ... so him maybe?",
    D: "how many presidents were there? 50? 58?",
    correct: "D",
  },
  {
    question: "How old do you think Joe Biden is?",
    A: "100",
    B: "Who cares?",
    C: "96 or 97 or 103",
    D: "I don't know he's super old though",
    correct: "C",
  },
  {
    question: "How do you think Jim Morrison died?",
    A: "Who is Jim Morrison?",
    B: "Oh my god Kailey shut up about Jim Morrison already",
    C: "Drugs or something",
    D: "Death",
    correct: "D",
  },
  {
    question: "What do you think of Lenin?",
    A: "Wasn't he that stinky guy?",
    B: "From The Beatles?",
    C: "I thought that was a place in Russia",
    D: "Stop asking me questions about people I don't know",
    correct: "A",
  },
  {
    question: "Who do you think this is?",
    A: "The picture is black and white so I guess he's super old",
    B: "Is he smoking? That's bad",
    C: "He looks like David Dobrik but I don't think it's him",
    D: "Is that Lenin?",
    correct: "C",
  },
  {
    question: "Who do you think Richard Nixon is?",
    A: "Was he a president?",
    B: "Is he rich? Because he has rich in his name",
    C: "I don't know. I like his name though",
    D: "Isn't Nixon that band that sings the song about the photograph",
    correct: "B",
  },
  {
    question: "What are the five boroughs?",
    A: "Brooklyn, Manhattan, Bronx, Queens, Staten Island ... I'm so smart",
    B: "Manhattan, Bromx, Queens, New York...Oh and Brooklyn!",
    C: "I think that's what doofenshmirtz is always trying to blow up",
    D: "I know you're just making stuff up, Kailey",
    correct: "B",
  },
  {
    question: "What is your favorite historical event?",
    A: "The British Tea Party because british people can't have tea now",
    B: "The Constitution because it made America and that's where I live",
    C: "Covid-19 because I was alive for it and I'm important",
    D:
      "Going to the moon was cool but a boy in my class told me it wasn't real",
    correct: "A",
  },
  {
    question: "What is my bosses name?",
    A: "Johnny",
    B: "Norbert",
    C: "Cassandra",
    D: "Mitski",
    correct: "D",
  },
];

function buildQuiz() {
  /* HTMLoutput thingy*/
  const output = [];

  /* Answer choice storing */
  questions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    /*button for each answer*/
    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
      );
    }

    /* output answer pls work dear lord*/
    output.push(
      `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
    );
  });

  /* output combination*/
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  /* answer containers */
  const answerContainers = quizContainer.querySelectorAll(".answers");

  /*record of answers per question/ find answer*/
  let numCorrect = 0;
  questions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    /* if answer is correct*/
    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      /* if answer is */
      answerContainers[questionNumber].style.color = "red";
    }
  });

  /* # correct for end of quiz */
  resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}

function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;

  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }

  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(0);

/* results*/
submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
