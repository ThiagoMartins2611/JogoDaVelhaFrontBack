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


let vitoriaDada = false;

 function VerfEmpate(matriz){

  let vazio = 9;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] == 1 || matriz[i][j] == 2) {
          vazio--
        }
    }
}

if(vazio == 0 && vitoriaDada == false){
 
  
 function empatado(){
   
      all.removeChild(jogo);
  
      let faixa = document.createElement('div');
      let texto1 = document.createElement('h1');
      let restart = document.createElement('div');
      let restartText = document.createElement('h2');
  
      faixa.className = "faixa";
      texto1.innerText = "EMPATE";

      restart.className = "restart"
      restartText.innerText = "Reiniciar";

    
      all.appendChild(faixa);
      faixa.appendChild(texto1);
      faixa.appendChild(restart);
      restart.appendChild(restartText);

      restart.onclick = function(){

        function reiniciando(){
          location.reload();
        }setInterval(reiniciando, 500)
        

      }


  }setTimeout(empatado, 1000);
  

  

}


 }

 
 


 function vitoria(verificardor){
  
  vitoriaDada = true;
  jogo.className = 'GameOFF'

  function temp(){
    all.removeChild(jogo);

    let faixa = document.createElement('div');
    let texto1 = document.createElement('h1');
    let texto2 = document.createElement('h2');
    let ganhador = document.createElement('div');


    faixa.className = "faixa";
    texto1.innerText = "Parabéns";
    texto2.innerText = "Vencedor:";
    ganhador.className = "ganhador"

    all.appendChild(faixa);
    faixa.appendChild(texto1);
    faixa.appendChild(texto2);
    faixa.appendChild(ganhador);

    //como ao clicar inverte a polaridade
    //auqi nesse caso true é bola e false e X
    if(verificardor == true){

      let vencedorBola = document.createElement('div');
      let bol = document.createElement('div');
      let restart = document.createElement('button')
      let restartText = document.createElement('h2')

      
      vencedorBola.className = "vencedor";
      vencedorBola.id = "BO";
      restart.className = "restart"
      restartText.innerText = "Reiniciar";

      bol.id = "bol";

      faixa.appendChild(restart);
      restart.appendChild(restartText);
      vencedorBola.appendChild(bol);

      ganhador.appendChild(vencedorBola);


      restart.onclick = function(){

        function reiniciando(){
          location.reload();
        }setInterval(reiniciando, 500)
        

      }


      console.log("bola")
    }else{

      let vencedorX = document.createElement('div');
      let xLineL = document.createElement('div');
      let xLineR = document.createElement('div');
      let restart = document.createElement('div')
      let restartText = document.createElement('h2')

      vencedorX.className = "vencedor";
      vencedorX.id = "XI";

      xLineL.className = "x-line";
      xLineL.id = "L"

      xLineR.className = "x-line";
      xLineR.id = "R";

        
      restart.className = "restart"
      restartText.innerText = "Reiniciar";

      vencedorX.appendChild(xLineL);
      vencedorX.appendChild(xLineR);
      faixa.appendChild(restart);
      restart.appendChild(restartText);

      ganhador.appendChild(vencedorX);

 

      restart.onclick = function(){

        function reiniciando(){
          location.reload();
        }setInterval(reiniciando, 500)
        

      }






        console.log("X")
    }

  }setTimeout(temp, 2000)
 }

 let lineVictory = {

    x: function(bloco, direction){
        let line = document.createElement('div');
        line.className = 'lineX';

        //horizontal: 1
        //vertical: 2
        //diagonal para esquerda: 3
        //diagonal para direita: 4

        switch(direction){

          case 1:
            line.id = 'HorizontalLine'
          break;

          case 2:
            line.id = 'VerticalLine'
          break;

          case 3:
            line.id = 'DiagonalLineL';
          break;

          case 4:
            line.id = 'DiagonalLineR';
          break;

        }

        bloco.appendChild(line);
    },

    bola: function(bloco, direction){ 

      let line = document.createElement('div');
      line.className = 'lineB';

      //horizontal: 1
      //vertical: 2
      //diagonal para esquerda: 3
      //diagonal para direita: 4

      switch(direction){

        case 1:
          line.id = 'HorizontalLine'
        break;

        case 2:
          line.id = 'VerticalLine'
        break;

        case 3:
          line.id = 'DiagonalLineL';
        break;

        case 4:
          line.id = 'DiagonalLineR';
        break;

      }

      bloco.appendChild(line);
      
    }


  }


 let ganhou = {
    XIS: function(matriz){

      
      //Horizontal
      if(matriz[0][0] == 1 && matriz[0][1] == 1 && matriz[0][2] == 1){

        vitoria(verificardor);
        lineVictory.x(bloco1, 1)
      }

      if(matriz[1][0] == 1 && matriz[1][1] == 1 && matriz[1][2] == 1){

        vitoria(verificardor);
        lineVictory.x(bloco4, 1)
      }

      if(matriz[2][0] == 1 && matriz[2][1] == 1 && matriz[2][2] == 1){

        vitoria(verificardor);
        lineVictory.x(bloco7, 1)
      }


      //Vertical
      if(matriz[0][0] == 1 && matriz[1][0] == 1 && matriz[2][0] == 1){

        vitoria(verificardor);
        lineVictory.x(bloco1, 2)
      }

      if(matriz[0][1] == 1 && matriz[1][1] == 1 && matriz[2][1] == 1){

        vitoria(verificardor);
        lineVictory.x(bloco2, 2)
      }

      if(matriz[0][2] == 1 && matriz[1][2] == 1 && matriz[2][2] == 1){

        vitoria(verificardor);
        lineVictory.x(bloco3, 2)
      }

      //Diagonal
      if(matriz[0][0] == 1 && matriz[1][1] == 1 && matriz[2][2] == 1){

        vitoria(verificardor);
        lineVictory.x(bloco1, 4)
      }

      if(matriz[0][2] == 1 && matriz[1][1] == 1 && matriz[2][0] == 1){

        vitoria(verificardor);
        lineVictory.x(bloco7, 3)
      }


    },

    BOLA: function(matriz){

      
        //Horizontal
      if(matriz[0][0] == 2 && matriz[0][1] == 2 && matriz[0][2] == 2){

        vitoria(verificardor);
        lineVictory.bola(bloco1, 1)
      }

      if(matriz[1][0] == 2 && matriz[1][1] == 2 && matriz[1][2] == 2){

        vitoria(verificardor);
        lineVictory.bola(bloco4, 1)
      }

      if(matriz[2][0] == 2 && matriz[2][1] == 2 && matriz[2][2] == 2){

        vitoria(verificardor);
        lineVictory.bola(bloco7, 1)
      }


      //Vertical
      if(matriz[0][0] == 2 && matriz[1][0] == 2 && matriz[2][0] == 2){

        vitoria(verificardor);
        lineVictory.bola(bloco1, 2)
      }

      if(matriz[0][1] == 2 && matriz[1][1] == 2 && matriz[2][1] == 2){

        vitoria(verificardor);
        lineVictory.bola(bloco2, 2)
      }

      if(matriz[0][2] == 2 && matriz[1][2] == 2 && matriz[2][2] == 2){

        vitoria(verificardor);
        lineVictory.bola(bloco3, 2)
      }

      //Diagonal
      if(matriz[0][0] == 2 && matriz[1][1] == 2 && matriz[2][2] == 2){

        vitoria(verificardor);
        lineVictory.bola(bloco1, 4)
      }

      if(matriz[0][2] == 2 && matriz[1][1] == 2 && matriz[2][0] == 2){

        vitoria(verificardor);
        lineVictory.bola(bloco7, 3)
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
         VerfEmpate(matriz);

     }else if(verificardor == false){
         verificardor = true;
         bloco1.appendChild(jogadores.Bolinha());
         matriz[0][0] = 2;

         ganhou.BOLA(matriz);
         VerfEmpate(matriz);
     }

     
 
    
 }
 
 }

 
 bloco2.onclick = function(){
 if (matriz[0][1] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco2.appendChild(jogadores.Xizinho());
         matriz[0][1] = 1;

         ganhou.XIS(matriz);
         VerfEmpate(matriz);

     }else if(verificardor == false){
         verificardor = true;
         bloco2.appendChild(jogadores.Bolinha());
         matriz[0][1] = 2;

         ganhou.BOLA(matriz);
         VerfEmpate(matriz);
     }

     
 }
 }

 
 bloco3.onclick = function(){
 if (matriz[0][2] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco3.appendChild(jogadores.Xizinho());
         matriz[0][2] = 1;

         ganhou.XIS(matriz);
         VerfEmpate(matriz);

     }else if(verificardor == false){
         verificardor = true;
         bloco3.appendChild(jogadores.Bolinha());
         matriz[0][2] = 2;

         ganhou.BOLA(matriz);
         VerfEmpate(matriz);
     }

     
 }

 }

 
 bloco4.onclick = function(){
 if (matriz[1][0] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco4.appendChild(jogadores.Xizinho());
         matriz[1][0] = 1;

         ganhou.XIS(matriz);
         VerfEmpate(matriz);

     }else if(verificardor == false){
         verificardor = true;
         bloco4.appendChild(jogadores.Bolinha());
         matriz[1][0] = 2;

         ganhou.BOLA(matriz);
         VerfEmpate(matriz);
     }

    
 }

 }

 
 bloco5.onclick = function(){
 if (matriz[1][1] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco5.appendChild(jogadores.Xizinho());
         matriz[1][1] = 1;

         ganhou.XIS(matriz);
         VerfEmpate(matriz);

     }else if(verificardor == false){
         verificardor = true;
         bloco5.appendChild(jogadores.Bolinha());
         matriz[1][1] = 2;

         ganhou.BOLA(matriz);
         VerfEmpate(matriz);
     }

 }

 }

 
 bloco6.onclick = function(){
 if (matriz[1][2] ==0){

 
     if(verificardor == true){
         verificardor = false;
         bloco6.appendChild(jogadores.Xizinho());
         matriz[1][2] = 1;

         ganhou.XIS(matriz);
         VerfEmpate(matriz);

     }else if(verificardor == false){
         verificardor = true;
         bloco6.appendChild(jogadores.Bolinha());
         matriz[1][2] = 2;

         ganhou.BOLA(matriz);
         VerfEmpate(matriz);
     }

 }

 }

 
 bloco7.onclick = function(){
 if (matriz[2][0] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco7.appendChild(jogadores.Xizinho());
         matriz[2][0] = 1;

         ganhou.XIS(matriz);
         VerfEmpate(matriz);

     }else if(verificardor == false){
         verificardor = true;
         bloco7.appendChild(jogadores.Bolinha());
         matriz[2][0] = 2;

         ganhou.BOLA(matriz);
         VerfEmpate(matriz);
     }

     
 }

 }

 
 bloco8.onclick = function(){
 if (matriz[2][1] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco8.appendChild(jogadores.Xizinho());
         matriz[2][1] = 1;

         ganhou.XIS(matriz);
         VerfEmpate(matriz);

     }else if(verificardor == false){
         verificardor = true;
         bloco8.appendChild(jogadores.Bolinha());
         matriz[2][1] = 2;

         ganhou.BOLA(matriz);
         VerfEmpate(matriz);
     }

  
 }

 }

 
 bloco9.onclick = function(){
 if (matriz[2][2] ==0){
 
     if(verificardor == true){
         verificardor = false;
         bloco9.appendChild(jogadores.Xizinho());
         matriz[2][2] = 1;

         ganhou.XIS(matriz);
         VerfEmpate(matriz);

     }else if(verificardor == false){
         verificardor = true;
         bloco9.appendChild(jogadores.Bolinha());
         matriz[2][2] = 2;

         ganhou.BOLA(matriz);
         VerfEmpate(matriz);
     }

    
 }
 
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
