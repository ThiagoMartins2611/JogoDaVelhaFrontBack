let escolha;
let all = document.querySelector('#all');
let menu = document.querySelector('#menu');
let XI = document.querySelector('#XI');
let BO = document.querySelector('#BO');

function Velha(verificardor){
    all.removeChild(menu);

    let jogo = document.createElement('div')
    jogo.id = "jogo"

     let bloco1 = document.createElement('div')
     bloco1.classList = "blocos"
     bloco1.id = "bloco1"

     let bloco2 = document.createElement('div')
     bloco2.classList = "blocos"
     bloco2.id = "bloco2"

     let bloco3 = document.createElement('div')
     bloco3.classList = "blocos"
     bloco3.id = "bloco3"

     let bloco4 = document.createElement('div')
     bloco4.classList = "blocos"
     bloco4.id = "bloco4"

     let bloco5 = document.createElement('div')
     bloco5.classList = "blocos"
     bloco5.id = "bloco5"

     let bloco6 = document.createElement('div')
     bloco6.classList = "blocos"
     bloco6.id = "bloco6"

     let bloco7 = document.createElement('div')
     bloco7.classList = "blocos"
     bloco7.id = "bloco7"

     let bloco8 = document.createElement('div')
     bloco8.classList = "blocos"
     bloco8.id = "bloco8"

     let bloco9 = document.createElement('div')
     bloco9.classList = "blocos"
     bloco9.id = "bloco9"

     all.appendChild(jogo);

     jogo.appendChild(bloco1);
     jogo.appendChild(bloco2);
     jogo.appendChild(bloco3);
     jogo.appendChild(bloco4);
     jogo.appendChild(bloco5);
     jogo.appendChild(bloco6);
     jogo.appendChild(bloco7);
     jogo.appendChild(bloco8);
     jogo.appendChild(bloco9);


     let matriz = [
             [0,0,0],
             [0,0,0],
             [0,0,0]
         ]
 
     let jogadores = {

         Xizinho: function(){

             let X = document.createElement('div');
             X.id = "X";

             let XL = document.createElement('div')
             let XR = document.createElement('div')

             XL.classList = "x-line";
             XR.classList = "x-line";

             XL.id = "lineLeft";
             XR.id = "lineRight";

             X.appendChild(XL);
             X.appendChild(XR);

          return X;

     },

         Bolinha: function(){

         let bola = document.createElement('div');

         bola.id = "Bola";

         return bola;

     },

 }



 bloco1.onclick = function(){
 if (matriz[0][0] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco1.appendChild(jogadores.Xizinho());
         matriz[0][0] = 1;
     }else if(verificardor == false){
         verificardor = true;
         bloco1.appendChild(jogadores.Bolinha());
         matriz[0][0] = 2;
     }
 
    
 }
 console.log(matriz)
 
 }
 
 bloco2.onclick = function(){
 if (matriz[0][1] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco2.appendChild(jogadores.Xizinho());
         matriz[0][1] = 1;
     }else if(verificardor == false){
         verificardor = true;
         bloco2.appendChild(jogadores.Bolinha());
         matriz[0][1] = 2;
     }
 }
 console.log(matriz)
 }
 
 bloco3.onclick = function(){
 if (matriz[0][2] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco3.appendChild(jogadores.Xizinho());
         matriz[0][2] = 1;
     }else if(verificardor == false){
         verificardor = true;
         bloco3.appendChild(jogadores.Bolinha());
         matriz[0][2] = 2;
     }
 }
 console.log(matriz)
 }
 
 bloco4.onclick = function(){
 if (matriz[1][0] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco4.appendChild(jogadores.Xizinho());
         matriz[1][0] = 1;
     }else if(verificardor == false){
         verificardor = true;
         bloco4.appendChild(jogadores.Bolinha());
         matriz[1][0] = 2;
     }
 }
 console.log(matriz)
 }
 
 bloco5.onclick = function(){
 if (matriz[1][1] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco5.appendChild(jogadores.Xizinho());
         matriz[1][1] = 1;
     }else if(verificardor == false){
         verificardor = true;
         bloco5.appendChild(jogadores.Bolinha());
         matriz[1][1] = 2;
     }
 }
 console.log(matriz)
 }
 
 bloco6.onclick = function(){
 if (matriz[1][2] ==0){

 
     if(verificardor == true){
         verificardor = false;
         bloco6.appendChild(jogadores.Xizinho());
         matriz[1][2] = 1;
     }else if(verificardor == false){
         verificardor = true;
         bloco6.appendChild(jogadores.Bolinha());
         matriz[1][2] = 2;
     }
 }
 console.log(matriz)
 }
 
 bloco7.onclick = function(){
 if (matriz[2][0] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco7.appendChild(jogadores.Xizinho());
         matriz[2][0] = 1;
     }else if(verificardor == false){
         verificardor = true;
         bloco7.appendChild(jogadores.Bolinha());
         matriz[2][0] = 2;
     }
 }
 console.log(matriz)
 }
 
 bloco8.onclick = function(){
 if (matriz[2][1] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco8.appendChild(jogadores.Xizinho());
         matriz[2][1] = 1;
     }else if(verificardor == false){
         verificardor = true;
         bloco8.appendChild(jogadores.Bolinha());
         matriz[2][1] = 2;
     }
 }
 console.log(matriz)
 }
 
 bloco9.onclick = function(){
 if (matriz[2][2] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco9.appendChild(jogadores.Xizinho());
         matriz[2][2] = 1;
     }else if(verificardor == false){
         verificardor = true;
         bloco9.appendChild(jogadores.Bolinha());
         matriz[2][2] = 2;
     }
 }
 console.log(matriz)
 }
}

XI.onmousedown = function(){
    XI.style.cursor = 'grabbing'

    XI.onmouseup = function(){
        XI.style.cursor = 'pointer'
        escolha = "X";
        
        let verificardor = true;
        Velha(verificardor);
    }
}

BO.onmousedown = function(){
    BO.style.cursor = 'grabbing'

    BO.onmouseup = function(){
        BO.style.cursor = 'pointer'
        escolha = "B";
        
        let verificardor = false;
        Velha(verificardor);

    }
}
