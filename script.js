class game{
    constructor(uservalue,computervalue){
        this.uservalue = uservalue;
        this.computervalue = computervalue;
    }

    getvalues(){
        this.uservalue = parseInt( document.getElementById("userinput").value);
        this.computervalue = Math.floor(Math.random()*3);
    }
}

function validate(){
    let display = document.getElementById("result");
    let play = new game();
    play.getvalues();
    document.getElementById("computer").innerHTML = play.computervalue;

    if(play.uservalue === play.computervalue) display.innerHTML= "Match Tie";
    else if(play.uservalue ===0){
        (play.computervalue ===1) ? display.innerHTML= "Computer won" : display.innerHTML= "You won"
    }
    else if(play.uservalue ===1){
        (play.computervalue ===0) ? display.innerHTML= "you won" : display.innerHTML= "Computer won"
    }
    else if(play.uservalue ===2){
        (play.computervalue ===0) ? display.innerHTML= "Computer won" : display.innerHTML= "you won"
    }
    else alert(`Enter a valid input`);
    
}