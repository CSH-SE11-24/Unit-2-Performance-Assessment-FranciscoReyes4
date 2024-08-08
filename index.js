const prompt = require('prompt-sync')()
//I created a object mixed with arrays to generate the questions and answers
const questions =  [
  {
 Question:"Who won the 2006 World Cup?",
    answer :"Italy",
  },
  { Question:"Who hosted the 2010 World Cup?",
    answer:"South Africa",
  },
  { Question:"Who went 3rd place in the 2014 World Cup?",
     answer:"Netherlands",
  },
  { Question:"Who won the golden Boot in the 2018 World cup?" ,
    answer:"Harry Kane",
  },
  { Question:"Who won the Golden Glove in the 2022 World cup?",
     answer:"Emiliano Martinez" 
},
 ] 

  


   
    
     
   
    


//counter so when they get an answer correct it increases their score
let score = 0 

//Conditionals to ask them if they want to play the game or not
let user = prompt("Ready to play?")
if(user == "Yes"){
  console.log("Alright Good luck!")
}else{
  console.log("Too bad you are still gonna play!")
}

//This function is supposed to ask the user the question.
function askQuestion(index){
  console.log(questions[index].Question)
  let user2 = prompt (" take a guess")
  return user2  
}
// need help with asking the rest of the questions.

//This function checks the answer wheter they are correct or not.
function checkAnswer(index,guess){
  console.log("The answer is",questions[index].answer)
  if(guess == questions[index].answer){
    console.log("Yeah that's right")
    score++
  }else{
    console.log("Nahh u wrong")
  }
}


//This function makes the game run and after they get their  final score to see what they got.
function playGame(){
  for(let i = 0; i<questions.length;i++){
    let guess = askQuestion(i)
    checkAnswer(i,guess)
  }
  console.log("Your final score is", score)
}

playGame()

let user2 = prompt("Do you want to play again?")
while(user2 == "Yes"){
playGame()
  user2  = prompt("Do you still want to play?")
  
}
  //This while loop runs the game if they write "Yes " on wheter they want to play again


 