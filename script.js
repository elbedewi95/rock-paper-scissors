var wins=0 ,ties=0, losses=0;

function game(){
var choice = prompt("Type: R: Rock, P: paper, S: Scissors").toUpperCase();
var choices =["R","P","S"];
var random = choices[Math.floor(Math.random()*3)];
console.log(random);
if(random=="S"){
    if(choice=="S"){
    ties++;
    alert("DRAW!\n Wins:"+wins+" losses:"+losses+" ties:"+ties);
    }
    else if (choice=="P"){
        losses++;
        alert("Computer chose Scissors, you LOSE! \n Wins:"+wins+" losses:"+losses+" ties:"+ties);
    } else if (choice =="R"){
        wins++;
        alert("Computer chose Scissors, you WIN!!!!\n Wins:"+wins+" losses:"+losses+" ties:"+ties);
    }
    else{
        if(confirm("Wrong input! Do you want to try again?")){
            game();
        }else{
            alert("GOODBYE!");
        }
    }
} else if(random=="P"){
    if (choice=="P"){
        ties++;
        alert("DRAW!\n Wins:"+wins+" losses:"+losses+" ties:"+ties);
    } else if(choice=="S"){
        wins++;
        alert("computer chose Paper, you WIN!!!\n Wins:"+wins+" losses:"+losses+" ties:"+ties);
    } else if(choice=="R"){
        losses++;
        alert("computer chose Paper, youn LOSE!\n Wins:"+wins+" losses:"+losses+" ties:"+ties);
    } else{
        if(confirm("Wrong input! Do you want to try again?")){
            game();
        } else{
            alert("GOODBYE!");
        }
    }
} else if (random =="R"){
    if(choice=="R"){
        ties++;
        alert("DRAW!\n Wins:"+wins+" losses:"+losses+" ties:"+ties);
    } 
    else if(choice=="S"){
        losses++;
        alert("computer chose Rock, you LOSE!\n Wins:"+wins+" losses:"+losses+" ties:"+ties);
    } else if (choice=="P"){
        wins++;
        alert("computer chose rock, you WIN!\n Wins:"+wins+" losses:"+losses+" ties:"+ties)
    } else{
        if(confirm("Wrong input! Do you want to try again?")){
            game();
        } else{
            alert("GOODBYE!");
        }
    }
}
if(confirm("do you want to play again?")){
    game();
}
else{
    alert("GOODBYE!");
}
return;
}


if(confirm ("Hi! I play Rock-Paper-Scissors, do you want to play?")){
    game();
}else{
    alert("GOODBYE!");
}