let max =prompt("Enter the maximum number");
console.log(max);
const random =Math.floor(Math.random() * max) + 1;

let guess =prompt("Guess the number");
while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }
    if(guess == random){
        console.log("Congratulations! you guessed the random number!! Your random number is", random);
        break;
    }else if(guess < random){
        guess = prompt("Too small, try again");
    }
    else{
        guess = prompt("Too large, try again");
    }
}

