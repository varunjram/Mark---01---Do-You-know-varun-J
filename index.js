// Mark 01 Final app

var readlineSync = require("readline-sync");

score = 0;

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName  + " Do you know Varun");

// Data of High score

var highscores = [
  {
    name : "Varun",
    score: 6
  },
  {
    name : "Lakshmi",
    score: 5
  }
]

function play(question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
    console.log("Your are Right!")
    score++
  } else {
    console.log("You are wrong")
    score--
  }
  console.log("your current score ",score)
  console.log("------------------------")
}

var questions = [
  {
  question:"Where does he Live? ",
  answer : "Bengaluru"
},{
  question:"What's his favorite Anime Character is? ",
  answer : "Zoro"
},{
  question:"What's his favorite Food ? ",
  answer : "Jalebi"
},{
  question:"What's his favorite colour? ",
  answer : "Green"
},{
  question:"What's his favorite Hobby? ",
  answer : "Gardening"
},{
  question:"My Bike is ? ",
  answer : "Yamaha FZX"
}]

for (var i = 0; i < questions.length; i++) {

play (questions[i].question,questions[i].answer)

}

console.log("Awesome!!! You scored " , score)

console.log(`
  High score data
  1.` + highscores[0].name,highscores[0].score + ("\n") +
  `  2.`  + highscores[1].name,highscores[1].score + ("\n") 
  )

// END




 





  


