const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
      } 
      else 
      {
        console.log('Error!');
      }
      
};
console.log(getUserChoice('Paper')); 
console.log(getUserChoice('fork')); 

const getComputerChoice  = () => {
   let randomNumber =  Math.floor(Math.random() * 3);
    if(randomNumber === 0){
    return 'rock';
    }
    else if(randomNumber === 1){
    return 'paper'
    }
    else{
    return 'scissors'
    }
}
console.log(getComputerChoice());
