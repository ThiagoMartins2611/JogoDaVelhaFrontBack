let bloco1 = document.querySelector('#bloco1');
let bloco2 = document.querySelector('#bloco2');
let bloco3 = document.querySelector('#bloco3');
let bloco4 = document.querySelector('#bloco4');
let bloco5 = document.querySelector('#bloco5');
let bloco6 = document.querySelector('#bloco6');
let bloco7 = document.querySelector('#bloco7');
let bloco8 = document.querySelector('#bloco8');
let bloco9 = document.querySelector('#bloco9');

let matriz = [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ]

let limitador1 = 0;

bloco1.onclick = function(){
    if (matriz[0][0] ==0){

        matriz[0][0] =1
    }
    console.log(matriz)

}

bloco2.onclick = function(){
    matriz = [
        [0,1,0],
        [0,0,0],
        [0,0,0]
    ] 
}

bloco3.onclick = function(){
    matriz = [
        [0,0,1],
        [0,0,0],
        [0,0,0]
    ]
}

bloco4.onclick = function(){
    matriz = [
        [0,0,0],
        [1,0,0],
        [0,0,0]
    ]
}

bloco5.onclick = function(){
    matriz = [
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ]
}

bloco6.onclick = function(){
    matriz = [
        [0,0,0],
        [0,0,1],
        [0,0,0]
    ]
}

bloco7.onclick = function(){
    matriz = [
        [0,0,0],
        [0,0,0],
        [1,0,0]
    ]
}

bloco8.onclick = function(){
    matriz = [
        [0,0,0],
        [0,0,0],
        [0,1,0]
    ]
}

bloco9.onclick = function(){
    matriz = [
        [0,0,0],
        [0,0,0],
        [0,0,1]
    ]
}

