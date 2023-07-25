let darkBtn = document.querySelector("#iconDark");
let title = document.querySelector(".title");
let body = document.body;
let cares = [];
let cmpt = 0;
let winner = false;
let turn ="x";
let theme = JSON.parse(localStorage.getItem("dark"));
if(theme == "dark"){
    body.classList.add("dark");
}else{
    body.classList.remove("dark");
}

darkBtn.addEventListener("click",()=>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("dark", JSON.stringify("dark"));
    }else{
        localStorage.setItem("dark", JSON.stringify("white"));
    }
    darkBtn.classList.toggle("fa-regular");
    darkBtn.classList.toggle("fa-solid");
});


function result ( a , b , c){
    winner= true;
    title.innerText ="\"" + cares[a] + "\" is winner ";
    document.getElementById(a).style.backgroundColor="#176B87";
    document.getElementById(b).style.backgroundColor="#176B87";
    document.getElementById(c).style.backgroundColor="#176B87";
    setInterval(()=>{
        title.innerText += " . ";
    },1000);
    setTimeout(()=>{
        location.reload();
    },3000);


}
function check (){
    for(let i=1 ; i<10; i++){
        cares[i]= document.getElementById(i).innerText;
    }
    if(cares[1]!= "" && cares[1] == cares[2] && cares[2] == cares[3]){
        result ( 1 , 2 , 3);
    }
    else if(cares[4]!= "" && cares[4] == cares[5] && cares[6] == cares[5]){
        result ( 4 , 5 , 6);
    }
    else if(cares[7]!= "" && cares[7] == cares[8] && cares[8] == cares[9]){
        result ( 7 , 8 , 9);
    }
    else if(cares[1]!= "" && cares[1] == cares[4] && cares[4] == cares[7]){
        result ( 1 , 4 , 7);
    }
    else if(cares[2]!= "" && cares[2] == cares[5] && cares[5] == cares[8]){
        result ( 2 , 5 , 8);
    }
    else if(cares[3]!= "" && cares[3] == cares[6] && cares[6] == cares[9]){
        result ( 3 , 6 , 9);
    }
    else if(cares[1]!= "" && cares[1] == cares[5] && cares[5] == cares[9]){
        result ( 1 , 5 , 9);
    }
    else if(cares[3]!= "" && cares[3] == cares[5] && cares[5] == cares[7]){
        result ( 3 , 5 , 7);
    }else if(cmpt == 9 && !winner){
        title.innerText ="draw result";
        setInterval(()=>{
            title.innerText += " . ";
        },1000);
        setTimeout(()=>{
            location.reload();
        },3000);
    }
}
function game(id){
    cmpt++;
    let care = document.getElementById(id);
    if(care.innerText =="" && turn =="x"){
        care.innerText = "x";
        turn ="o";
        title.innerText = "the role of ' o '";
    }
    else if(care.innerText =="" && turn =="o"){
        care.innerText = "o";
        turn ="x";
        title.innerText = "the role of ' X '";
    }
    // check winner 
    check();
}

