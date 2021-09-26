let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let op = document.getElementById('op');
let resultado;
let btn = document.getElementById('btn');

function tomarDatos() {
    console.log(numero1.value,op.value,numero2.value);
    console.log(numero1_1,op2,numero2_2);
};


function matematica (){
    let numero1_1 = parseInt(numero1.value);
    let op2 = op.value;
    let numero2_2 = parseInt(numero2.value);

    if (op2 === '+'){
        resultado = numero1_1 + numero2_2;
    }
    else if (op2 === '-'){
        resultado = numero1_1 - numero2_2;
    }
    else if (op2 === '*'){
        resultado = numero1_1 * numero2_2;
    }
    else if (op2 === '/'){
        resultado = numero1_1 / numero2_2;
    }
    console.log(resultado);
};
    
function calcular(){   
     tomarDatos();    
     matematica();
};

btn.addEventListener('click',calcular);