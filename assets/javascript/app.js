
var questions = [{
    question: "Who was Chandler's roommate before Joey?",
    options: ["Carl", "Kip", "Ken", "Stan"],
    answer: 1
}, {
    question: "How many sisters does Joey have?",
    options: ["5", "6", "7", "8"],
    answer: 2
}, {
    question: "Of these, which is Chandler's least favorite holiday?",
    options: ["Christmas", "Thanksgiving", "Halloween", "Easter"],
    answer: 1
}, {
    question: "In the end, who was the only one of the main six to not marry?",
    options: ["Joey", "Ross", "Phoebe", "Rachel"],
    answer: 0
}, {
    question: "What does Phoebe sing about most ofter?",
    options: ["A Cute Dog", "Ugly Naked Man", "The Coffee Shop", "A Smelly Cat"],
    answer: 3
}, {
    question: "Since when have Ross and Chandler know each other?",
    options: ["Elementary School", "Middle School", "High School", "College"],
    answer: 3
}, {
    question: "What does Ross do when he turns 30",
    options: ["Freak Out!", "Buy a Sports Car", "Propose to Rachel", "Travel to Europe"],
    answer: 1
}, {
    question: "Who is Joey's agent?",
    options: ["Estelle", "Charlotte", "Ruth", "Ester"],
    answer: 0
}, {
    question: "What movie character is Ross compared to?",
    options: ["Clark Kent", "Bruce Wayne", "Indiana Jones", "James Bond"],
    answer: 2
}, {
    question: "What is Joey's signiture pick-up line?",
    options: ["How You Doin'?", "Aye Bebe!", "Let's Date!", "Wanna Make-out?"],
    answer: 0
}
];

var rightResponses = ["You know your friends!", "You're a great friend!", "Hey good lookin' ;P", "Did I see you at Central Perk?", "You know your stuff!"]

function triviaQuestion(num) {
    reset();
    start();
    $('#question').html(questions[num].question);
    
    var optionsArray = questions[num].options;
    $("#options").empty();

    for(i=0; i<optionsArray.length; i++) {
        var optionButton = $("<button>");
        optionButton.text(optionsArray[i]);
        optionButton.attr('data-id', i);
        $("#options").append(optionButton);
    }
    
    if(time != 0) {
        $("#options").on('click', 'button', function() {
            stop();
            guess = $(this).data("id");
            console.log(guess);
            checkGuess(guess);
        })
    }
    
}
function reset() {

    time = 10;
  
    $("#timer").text("10");
  
}

function start() {

    if (!timerRunning) {
      intervalId = setInterval(count, 1000);
      timerRunning = true;
    }
}

function stop() {

    clearInterval(intervalId);
    timerRunning = false;
}

function count() {

    if(time != 0)
        time--;
    else {
        stop();
        var rightAnswer = questions[track].answer;
        $("#options").text("You ran out of time! The answer friends were looking for was " + questions[track].options[rightAnswer])
        time = -1;
        unAnswered ++;
    }
    if(time == -1) {
        start();
    }
    if(time == -4) {
        stop();
        nextQuestion();
    }
    var converted = timeConverter(time);

    $("#timer").text(converted);
}

function timeConverter(t) {

    var seconds = t
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return seconds;
}

function checkGuess(guess) {
    var rightAnswer = questions[track].answer;
    if(guess === questions[track].answer) {
        var goodPick = Math.floor(Math.random() * rightResponses.length)
        $("#options").text(rightResponses[goodPick])
        correct ++;
    }
    else {
        incorrect ++;
        $("#options").text("Good try but the answer we were looking for was " + questions[track].options[rightAnswer])
        
    }
    time = -1;
    start();
}

function nextQuestion() {
    track ++;
    if(track<questions.length) {
        next = setTimeout(triviaQuestion(track), 2000)
    }
    else
    score();
}

$("#start").click(function(){
    $(this).hide();
    triviaQuestion(track);
}); 
    
function score() {
    // if((correct + incorrect) < 10) {
    //     incorrect ++;
    // }
    $("#options").text("Number of Questions right: " + correct + " <br/> " + 
    "Number of Questions wrong: " + incorrect + " <br/> " +
    "Percentage: " + (correct/incorrect));
    
    $("#options").append($("<button>"))
}

var unAnswered = 0;
var next;
var guess;
var track = 0;
var correct = 0;
var incorrect = 0;
let time = 10;
var timerRunning = false;




