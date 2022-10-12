var clickedpattern=[];
var gamepattern=[];
var buttoncolors=["red","blue","green","yellow"];
var level=0
function sequence(){
    clickedpattern=[];
    var randomnumber=(Math.floor(Math.random()*4));
    var randomchosencolor=buttoncolors[randomnumber];
    gamepattern.push(randomchosencolor);
    var choose="#"+randomchosencolor;
    $(choose).fadeOut(100).fadeIn(100);
    level+=1;
    $("h1").text("LEVEL "+ level);
        var audio=new Audio("sounds/"+randomchosencolor+".mp3");    
        audio.play();
        animatePress(randomchosencolor);
};
$(".btn").click(function (){
    var userchosencolor=this.id;
    clickedpattern.push(userchosencolor);
    var player=new Audio("sounds/"+userchosencolor+".mp3");
    player.play();
    animatePress(userchosencolor);
    check(clickedpattern.length-1)
});
$("body").keypress(function (){
    sequence();
})
function animatePress(usercolor){
    $("#"+usercolor).addClass("pressed");
    setTimeout(function (){
        $("#"+usercolor).removeClass("pressed");
    },100);
};
function check(level){
    if(gamepattern[level]==clickedpattern[level]){
        if(gamepattern.length==clickedpattern.length){
            setTimeout(function (){
                sequence();
                
            },1000);
        }
    }
    else{
            var wrong=new Audio("sounds/wrong.mp3");
            wrong.play();
            $("h1").text("You Lost").addClass("eliminated");
            setTimeout(function (){
                $("h1").removeClass("eliminated");
                $("h1").text("Refresh to play again");
            },1000);
           
        }
    }
