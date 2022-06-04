var You = 0;
var complife = 0;
var Rock = document.getElementById("Rock"),
Paper = document.getElementById("Paper"),
Scissors = document.getElementById("Scissors"),
win = document.getElementById("win"),
msg = document.getElementById("msg"),
You_amount = document.getElementById("you");
You_amount.innerHTML = 0;
comp_amount = document.getElementById("com");
comp_amount.innerHTML = 0;
win.innerHTML ="Get 5 points to win"
function run(){
    if(Rock.checked){choice = "Rock"}
    if(Paper.checked){choice = "Paper"}
    if(Scissors.checked){choice = "Scissors"}
    function com() {
        let option = ["Rock","Paper","Scissors"]
        let rand = Math.floor(Math.random()*3)
        var com = option[rand]
        function result(win,lose,name){
            if(win == "Rock" && lose == "Scissors"){
                return "Rock breaks Scissors<br>"+"<b>"+name+" win this round.</b>"
            }
            if(win == "Paper" && lose == "Rock"){
                return "Paper wraps Rock<br>"+"<b>"+name+" win this round.</b>"
            }
            if(win == "Scissors" && lose == "Paper"){
                return "Scissors cuts Paper<br>"+"<b>"+name+" win this round.</b>"
            }
            if(win == lose){return "Tied"}
        }
        var choice_win = result(choice,com,"You");
        var comp_win = result(com,choice,"Computer");
        if(choice_win == undefined){
            if(complife < 5){comp_amount.innerHTML = (complife += 1);} 
        }
        if(comp_win == undefined){
            if(You < 5){You_amount.innerHTML = (You += 1);} 
        }
        if(You == 5){
            document.getElementById("content").style.display = "none";
            document.getElementById("endMsg").style.display = "block";
            document.getElementById("result").innerHTML = "You Win";
            document.getElementById("resultButton").innerHTML = "Play again";
        }
        if(complife == 5){
            document.getElementById("content").style.display = "none";
            document.getElementById("endMsg").style.display = "block";
            document.getElementById("result").innerHTML = "You Lose";
            document.getElementById("resultButton").innerHTML = "Retry";
        }
        function winner(one,two){
            if (one == undefined){return two;}
            if(two == undefined){return one;}
            if(one == two){return "<b>Tied</b>"}
        }
        var win_statement = winner(choice_win,comp_win)
        // console.log(win_statement);
        win.innerHTML = win_statement;
        return com
        
    }
    msg.value = com()
}
function refresh(){
    document.getElementById("content").style.display = "block";
    document.getElementById("endMsg").style.display = "none";
    document.getElementById("Rock").checked = true;
    You_amount.innerHTML = 0; comp_amount.innerHTML = 0;
    complife = 0; You = 0;
    win.innerHTML = "Get 5 points to win"; msg.value = "";

}