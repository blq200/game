let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
var tentatives = document.getElementById('numbr');
let number = Math.floor(Math.random() *100) + 1;
var nbr=10;
console.log(number);
btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        if(nbr==10 || nbr ==9)
        {
            output.innerHTML = 'You are smart!';
        }
        else
        {
            output.innerHTML = `You guessed right,your number was ${number}`
        }
        
    }
    else if (input < number){
        output.innerHTML = "You guessed too low!"
        nbr--;
        tentatives.innerHTML=nbr;
    }
    else if (input > number && input==100){
        output.innerHTML = "You guessed too high!"
        nbr--;
        tentatives.innerHTML=nbr;
    } 
    if(nbr==0)
    {
        output.innerHTML = "game over";
        nbr--;
        document.location.reload();
    }   
});