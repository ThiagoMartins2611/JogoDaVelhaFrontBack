let escolha;
let all = document.querySelector('#all');
let menu = document.querySelector('#menu');
let XI = document.querySelector('#XI');
let BO = document.querySelector('#BO');

function Velha(verificardor){

    function create(){
        all.removeChild(menu);

        const jogo = document.createElement('div')
        jogo.id = "jogo"
    
         const bloco1 = document.createElement('div')
         bloco1.classList = "blocos"
         bloco1.id = "bloco1"
    
         const bloco2 = document.createElement('div')
         bloco2.classList = "blocos"
         bloco2.id = "bloco2"
    
         const bloco3 = document.createElement('div')
         bloco3.classList = "blocos"
         bloco3.id = "bloco3"
    
         const bloco4 = document.createElement('div')
         bloco4.classList = "blocos"
         bloco4.id = "bloco4"
    
         const bloco5 = document.createElement('div')
         bloco5.classList = "blocos"
         bloco5.id = "bloco5"
    
         const bloco6 = document.createElement('div')
         bloco6.classList = "blocos"
         bloco6.id = "bloco6"
    
         const bloco7 = document.createElement('div')
         bloco7.classList = "blocos"
         bloco7.id = "bloco7"
    
         const bloco8 = document.createElement('div')
         bloco8.classList = "blocos"
         bloco8.id = "bloco8"
    
         const bloco9 = document.createElement('div')
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
    }

    create()

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



 function vitoria(){
    all.removeChild(jogo);
    console.log(verificardor)
 }



 let ganhou = {
    XIS: function(matriz){

      //Horizontal
      if(matriz[0][0] == 1 && matriz[0][1] == 1 && matriz[0][2] == 1){

        vitoria();
      }

      if(matriz[1][0] == 1 && matriz[1][1] == 1 && matriz[1][2] == 1){

        vitoria();
      }

      if(matriz[2][0] == 1 && matriz[2][1] == 1 && matriz[2][2] == 1){

        vitoria();
      }


      //Vertical
      if(matriz[0][0] == 1 && matriz[1][0] == 1 && matriz[2][0] == 1){

        vitoria();
      }

      if(matriz[0][1] == 1 && matriz[1][1] == 1 && matriz[2][1] == 1){

        vitoria();
      }

      if(matriz[0][2] == 1 && matriz[1][2] == 1 && matriz[2][2] == 1){

        vitoria();
      }

      //Diagonal
      if(matriz[0][0] == 1 && matriz[1][1] == 1 && matriz[2][2] == 1){

        vitoria();
      }

      if(matriz[0][2] == 1 && matriz[1][1] == 1 && matriz[2][0] == 1){

        vitoria();
      }


    },

    BOLA: function(matriz){

        //Horizontal
      if(matriz[0][0] == 2 && matriz[0][1] == 2 && matriz[0][2] == 2){

        vitoria();
      }

      if(matriz[1][0] == 2 && matriz[1][1] == 2 && matriz[1][2] == 2){

        vitoria();
      }

      if(matriz[2][0] == 2 && matriz[2][1] == 2 && matriz[2][2] == 2){

        vitoria();
      }


      //Vertical
      if(matriz[0][0] == 2 && matriz[1][0] == 2 && matriz[2][0] == 2){

        vitoria();
      }

      if(matriz[0][1] == 2 && matriz[1][1] == 2 && matriz[2][1] == 2){

        vitoria();
      }

      if(matriz[0][2] == 2 && matriz[1][2] == 2 && matriz[2][2] == 2){

        vitoria();
      }

      //Diagonal
      if(matriz[0][0] == 2 && matriz[1][1] == 2 && matriz[2][2] == 2){

        vitoria();
      }

      if(matriz[0][2] == 2 && matriz[1][1] == 2 && matriz[2][0] == 2){

        vitoria();
      }


    },
 }



 bloco1.onclick = function(){
 if (matriz[0][0] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco1.appendChild(jogadores.Xizinho());
         matriz[0][0] = 1;

         ganhou.XIS(matriz);

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

         ganhou.XIS(matriz);

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

         ganhou.XIS(matriz);

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

         ganhou.XIS(matriz);

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

         ganhou.XIS(matriz);

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

         ganhou.XIS(matriz);

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

         ganhou.XIS(matriz);

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

         ganhou.XIS(matriz);

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

         ganhou.XIS(matriz);

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

