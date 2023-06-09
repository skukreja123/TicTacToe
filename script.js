console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgame = false

// change the turn
const changeturn = ()=>{
    return turn =="X"?"0":"X"
}

// CHECK win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0,1,2,1,6,0],
        [3,4,5,1,14,0],
        [6,7,8,1,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,-2,13,43],
        [2,4,6,2,13,136],
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText!="")
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgame = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
            document.querySelector(".line").style.width = "30vw"
            document.querySelector(".line").style.transform= `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })

}

// main

let boxes = document.getElementsByClassName("box");
// for each element present in array
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector('.boxtext')
    Element.addEventListener('click',()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;
            turn  = changeturn();
            audioturn.play();
            checkwin(); 
            if(!isgame)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn For " +turn;
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(Element=>{
        Element.innerText = ""
    })
    turn = "X"
    isgame = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " +turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector(".line").style.width = "0"
})
