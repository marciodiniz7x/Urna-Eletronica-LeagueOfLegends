// Variáveis e Presets //////////////////////////////////////////////
let numero = document.querySelector('.numero');

let digito1 = document.querySelector('.digito1');
let digito2 = document.querySelector('.digito2');

let telainicial = document.querySelector('.telainicial')
let cliquebranco = document.querySelector('.cliquebranco')
let cliqueconfirma = document.querySelector('.cliqueconfirma')
let invalido = document.querySelector('.invalido')

let diginvalido = document.querySelector('.digito-invalido');

let kayle = document.querySelector('.kayle');
let qiyana = document.querySelector('.qiyana');
let irelia = document.querySelector('.irelia');
let sylas = document.querySelector('.sylas');

digito1.style.animation = '';
digito2.style.animation = 'none';

let votoBranco = false;
let votoInvalido = false;
let fim = false;

let yuumi = document.querySelector('.yuumi');
let telaBranca = document.querySelector('.telabranca');

let jax = document.querySelector('.jax');
const music = new Audio('images/jaxVotou.mp3');
const kayleVoz = new Audio('images/kayleVoz.mp3');
const ireliaVoz = new Audio('images/ireliaVoz.mp3');
const qiyanaVoz = new Audio('images/qiyanaVoz.mp3');
const sylasVoz = new Audio('images/sylasVoz.mp3');



// Votando /////////////////////////////////////////////////////////
const loop = setInterval(() => {
    if (digito1.value == "2" && digito2.value == "2") {
        telainicial.classList.add('sumir');
        kayle.classList.remove('sumir');

        kayleVoz.play();
        setTimeout(() => {
            kayleVoz.src = 'none';
        }, 2000);

    } else if (digito1.value == "2" && digito2.value == "4") { 
        telainicial.classList.add('sumir');
        qiyana.classList.remove('sumir');

        qiyanaVoz.play();
        setTimeout(() => {
            qiyanaVoz.src = 'none'
        }, 1300);

          
    } else if (digito1.value == "1" && digito2.value == "1") {
        telainicial.classList.add('sumir');
        irelia.classList.remove('sumir'); 

        ireliaVoz.play();
        setTimeout(() => {
            ireliaVoz.src = 'none';
        }, 2000);
        
    } else if (digito1.value == "1" && digito2.value == "3") {
        telainicial.classList.add('sumir');
        sylas.classList.remove('sumir');

        sylasVoz.play();
        setTimeout(() => {
            sylasVoz.src = 'none';
        }, 2300);
        
    } else {
        if (digito1.value != "" && digito2.value != "") {
            votoInvalido = true;
            telainicial.classList.add('sumir');
            invalido.classList.remove('sumir');
            diginvalido.innerHTML = `Você digitou: <strong>${digito1.value}${digito2.value}</strong>`;
            
        } else if (digito1.value == "" && digito2.value == "") {
            digito1.style.animation = '';
        }
    }
}, 10);



// Funções dos Botões ///////////////////////////////////////////////
function digitar(numero) {
    if (fim === false && votoBranco === false) {
        if (digito1.value == "" && digito2.value == "") {
            digito1.value = numero;
            digito1.style.animation = 'none';
            digito2.style.animation = '';
        } else if (digito1.value != "" && digito2.value == "") {
            digito2.value = numero;
            digito2.style.animation = 'none';
            
        }
    }
}

function branco() {
    if (fim === false) {
        if (digito1.value == "" && digito2.value == "") {
            votoBranco = true;
            telainicial.classList.add('sumir');
            cliquebranco.classList.remove('sumir');
        }
    }
}

function corrige() {
    if (fim === false) {
        kayle.classList.add('sumir');
        qiyana.classList.add('sumir');
        irelia.classList.add('sumir');
        sylas.classList.add('sumir');
        

        cliquebranco.classList.add('sumir');
        invalido.classList.add('sumir');
        telainicial.classList.remove('sumir');
        digito1.value = "";
        digito2.value = "";
        votoBranco = false;
        votoInvalido = false;
    }
}

function confirma() {
    if (votoBranco === true || votoInvalido === true || digito1.value != "" && digito2.value != "") {
        fim = true
        digito1.value = "";
        digito2.value = "";
        telainicial.classList.add('sumir');
        cliquebranco.classList.add('sumir');
        invalido.classList.add('sumir')

        kayle.classList.add('sumir')
        qiyana.classList.add('sumir');
        irelia.classList.add('sumir');
        sylas.classList.add('sumir');

        cliqueconfirma.classList.remove('sumir')

        music.play();
        jax.classList.remove('sumir');
        setTimeout(() => {
            jax.classList.add('jaxInverso');
            setTimeout(() => {
                jax.classList.remove('jaxInverso');
                setTimeout(() => {
                    jax.classList.add('sumir');
                }, 1000);
            }, 600);
        }, 2000);

  
    } 
}

// Funções Mesária Yuumi /////////////////////////////////////////////

yuumi.addEventListener("click", function() {
    if (fim === true) {
        fim = false
        location.reload()

    } else {

    }
})

function comecar() {
    yuumi.classList.add('yuumiAngular')
    setTimeout(() => {
        telaBranca.classList.add('sumir')
        yuumi.classList.remove('yuumiAngular')
    }, 1400);
    setTimeout(() => {
        telainicial.classList.remove('sumir')
    }, 750);
}







