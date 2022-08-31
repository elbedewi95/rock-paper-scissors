
function game(){
var choice = prompt("Type: R: Rock, P: paper, S: Scissors").toUpperCase();
var choices =["R","P","S"];
var random = choices[Math.floor(Math.random()*3)];
console.log(random);
if(random=="S"){
    if(choice=="S"){
    alert("DRAW!");
    }
    else if (choice=="P"){
        alert("Computer chose Scissors, you LOSE!");
    } else if (choice =="R"){
        alert("Computer chose Scissors, you WIN!!!!");
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
        alert("DRAW!");
    } else if(choice=="S"){
        alert("computer chose Paper, you WIN!!!");
    } else if(choice=="R"){
        alert("computer chose Paper, youn LOSE!");
    } else{
        if(confirm("Wrong input! Do you want to try again?")){
            game();
        } else{
            alert("GOODBYE!");
        }
    }
} else if (random =="R"){
    if(choice=="R"){
        alert("DRAW!");
    } 
    else if(choice=="S"){
        alert("computer chose Rock, you LOSE!");
    } else if (choice=="P"){
        alert("computer chose rock, you WIN!")
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