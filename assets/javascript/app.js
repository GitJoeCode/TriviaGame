
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
    
    $('#question').html(questions[num].question);
    count --;
    var optionsArray = questions[num].options;
    $("#options").empty();

    for(i=0; i<optionsArray.length; i++) {
        var optionButton = $("<button>");
        optionButton.text(optionsArray[i]);
        optionButton.attr('data-name', i);
        $("#options").append(optionButton);
    }
    

    $("#options").on('click', 'button', function() {
        guess = $(this).data("name");
        var rightAnswer = questions[0].answer;
        var nextQuestion;
        checkGuess(guess);
       
       
        // if(guess === questions[track].answer) {
        //     pause(counter);
        //     var goodPick = Math.floor(Math.random() * rightResponses.length)
        //     $("#options").text(rightResponses[goodPick])
        //     correct ++;
        //     nextQuestion = setTimeout(triviaQuestion(track), 5000);
        // }

        // else {
        //     pause(counter);
        //     $("#options").text("Good try but the answer we were looking for was " + questions[0].options[rightAnswer])
        //     incorrect ++;
        //     nextQuestion = setTimeout(triviaQuestion(track), 5000);
        // }
    })

}

function checkGuess(guess) {
    if(guess === questions[track].answer) {
        var goodPick = Math.floor(Math.random() * rightResponses.length)
        $("#options").text(rightResponses[goodPick])
        correct ++;

    }
    else {
        incorrect ++;

    }
    count = 0;
    if(currentQuestion < lastQuestion) {
        track ++;
        nextQuestion = setTimeout(triviaQuestion(track), 5000);
    }
}

$("#start").click(function(){
    $(this).hide();
    counter = setInterval(timer, 1000); 
    triviaQuestion(track);
}); 
    


function timer() {
    $("#timer").html(count + " seconds remaining")
    count --;
    if(count <= 0) {
        
        clearInterval(counter);
        return;
    }
    
}

// function nextQuestion () {
//     count ++;
//     triviaQuestion(track);

// }

function pause() {
    clearInterval;  
}

var count = 30;
var guess;
var track = 0;
var correct = 0;
var incorrect = 0;


// $("#options").on('click', 'button', function() {
//     guess = $(this).data("name");
//     var rightAnswer = questions[0].answer;
//     var nextQuestion;
//     if(guess === questions[0].answer) {
//         var goodPick = Math.floor(Math.random() * rightResponses.length)
//         $("#options").text(rightResponses[goodPick])
//         correct ++;
//         nextQuestion = setTimeout(triviaQuestion(track), 5000);
//     }
//     else {
//         $("#options").text("Good try but the answer we were looking for was " + questions[0].options[rightAnswer])
//         incorrect ++;
//         nextQuestion = setTimeout(triviaQuestion(track), 5000);
//     }
// })

function startGame() {

    showImage = setInterval(nextImage, 2000);
  
  
  }

