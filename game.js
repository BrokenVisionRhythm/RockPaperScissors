let n;
    let s;
    let i=Math.floor(Math.random()*3)+1;

function choice(){
  n=window.prompt("1-rock, 2-paper, 3-scissors")
  if(n > 3 || n<0){
    window.alert("Wrong input!")
  }
  else{
    n=n;
  };
}

function check(){
    while(n==i){
     alert("Draw!");
     choice();
     alert("Le machine choosed:"+s);
    };
    if(i==1 && n==2){
     alert("YOU WON!");
    }
    if(i==2 && n==3){
        alert("YOU WON!");
    }
    if(i==3 && n==1){
        alert("YOU WON!");
    }
    if(n==1 && i==2){
        alert("YOU LOOSE!");
       }
    if(n==2 && i==3){
      alert("YOU LOOSE!");
    }
    if(n==3 && i==1){
       alert("YOU LOOSE!");
    }

}

function game(){
    if(i==1){
        s="rock"
    }
    else if(i==2){
        s="paper"
    }
    else if(i==3){
        s=="scissors"
    }
    choice();
    alert("Le machine choosed:"+s);
    check();
}

game()