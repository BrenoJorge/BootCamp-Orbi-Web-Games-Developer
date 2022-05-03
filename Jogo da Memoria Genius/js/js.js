let order = [];
let clickedOrder = [];
let score = 0;

//0- verde
//1- vermelho
//2- amarelo
//3- azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shufflerOrder = () => {
    let colorOrder = Math.floor(Math.random()* 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
 }
    
    let lightColor = (element, number) => {
        number = number * 500;
        setTimeout(() => {
            element.classList.add('selecionado');
        }, number - 250);
        setTimeout(() => {
            element.classList.remove("selecionado");
        }, number - 20);
    }

   let checkOrder = () => {
       for(let i in clickedOrder){
           if(clickedOrder[i] != order[i]){
               lose();
               break;
           }
       }
       
       if(clickedOrder.length == order.length){
           alert("Pontuação: " + score + "\nVoce acertou... Iniciando próximo nivel");
           nextLevel();
       }
   }
   
   let click = (color) =>{
       clickedOrder[clickedOrder.length] = color;
       createColorElement(color).classList.add('selecionado');
       
       setTimeout(() => {
          createColorElement(color).classList.remove('selecionado');
          checkOrder();
       }, 250);
             
   }
   
let createColorElement = (color) =>{
    if(color == 0) {
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

let nextLevel = () =>{

    score++;
    shufflerOrder();
}

let lose = () => {
    alert("Pontuação: " + score + "\nVoce perdeu o jogo");
    order = [];
    clickedOrder = [];
    
    playGame();
}

let playGame = () =>{
    alert("Bem vindo ao jogo da memória inspirado no famoso brinquedo Genius!");
    score = 0;
    
    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();