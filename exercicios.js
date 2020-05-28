/*
var nome = "João";
var sobrenome = "Silva";
var idade = 30;
var resultado = (nome + " " + sobrenome + " terá " + idade + " anos.");
console.log(resultado);
*/


/*
var n1 = 2;
var n2 = 3;

var triploNumeros = triploDaSoma(n1, n2);

console.log(triploNumeros);

function triploDaSoma(num1, num2) {
    let somar = num1 + num2;
    let resultado = triplo(somar);
    return resultado;
}

function triplo(soma) {
    return soma * 3;
}
*/


/*
var raio = 3;

function perimetro (raio) {

 return (3.14 * raio * 2)

}

function area (raio) {

 return (3.14 * raio * raio)

}
*/


/*
var n = "Enzo";
var s = "Silva";

var tamanhoTotal = tamanhoNomeCompleto(n, s);

function tamanhoNomeCompleto(nome, sobrenome) {
    let tamanho = nome + " " + sobrenome;
    return tamanho.length;
}

console.log(tamanhoTotal);
*/


/*
var diaSemana = "domingo";
var exibirMensagem = hojeSeJoga(diaSemana);

function hojeSeJoga(weekDay) {
    if (weekDay === "domingo") {
            return "Hoje é dia de futebol!!!";
    } else {
            return "Hoje não é dia de futebol :(";
    }
}

console.log(exibirMensagem);
*/


/*
var num = 0;

var exibeResultado = sinal(num);

function sinal(numero) {
    if (numero > 0) {
        return 1;
    } else if (numero == 0) {
        return 0;
    } else {
        return -1;
    }
}

console.log(exibeResultado);
*/


/*
var num = 2;

var numeroSorte = eNumeroDaSorte(num);

function eNumeroDaSorte(numero) {
    let mult2 = (2 * numero) % 2 == 0;
    let mult3 = (3 * numero) % 2 == 0;

    return mult2 > 0 && mult2 != 15 && mult3 > 0 && mult3 != 15;
}

if (numeroSorte) {
    console.log("Parabéns!!! É o seu número da sorte!!!")
} else {
    console.log("Ah, que pena!!! Não é o seu número da sorte!!!")
}
*/


/*
var diaSemana = "segunda";
var hora = 10;

var info = possoIrAoBanco(diaSemana, hora);

function possoIrAoBanco(diaDaSemana, horaAtual) {
    let podeNaoPode = diaDaSemana != "sábado" && diaDaSemana != "domingo" && horaAtual > 9 && horaAtual < 15;
    return podeNaoPode;

}
*/


/*
var prof = "Músico";
var nac = "Brasil";
var km = 5;

var result = filosofoHipster(prof, nac, km);


function filosofoHipster(profissao, nacionalidade, quilometros) {

    return profissao  == "Músico" && nacionalidade == "Brasil" && quilometros > 2;

}

console.log(result);
*/


/*
var prof = "Músico";
var nac = "Brasil";
var km = 5;

console.log(filosofoHipster(prof, nac, km));

prof = "Música";
nac = "Argentina";
km =  1;

console.log(filosofoHipster(prof, nac, km));

prof = "Docente";
nac = "Canadá";
km =  12;

console.log(filosofoHipster(prof, nac, km));

function filosofoHipster(profissao, nacionalidade, quilometros) {

    return profissao  == "Músico" && nacionalidade == "Brasil" && quilometros > 2;

}
*/


/*
var i = 69;
var s = "M";
var c = 36;
var podeNaoPode = podeSeAposentar(i, s, c);

function podeSeAposentar(idade, sexo, contrib) {
    return idade > 60 && sexo === "F" && contrib >= 30 || idade > 65 && sexo === "M" && contrib >= 30
}

console.log(podeNaoPode);
*/


/*
Uma pessoa que mede 1.5m, desacompanhada de um adulto, e não tem problemas cardíacos, 
pode subir na atração. Então a execução da função podeSubir(1.5, falso, falso) deve retornar true

Uma pessoa que mede 1.2m, está acompanhada por um adulto, e não tem problemas cardíacos, 
pode subir na atração. Então a execução da função podeSubir(1.2, verdadeiro, falso) deve retornar true

Uma pessoa que mede 1.2m, desacompanhada de um adulto, e sem problemas cardíacos, não pode subir na atração. 
Então a execução da função podeSubir(1.2, falso, falso) deve retornar false
*/

/*
var altura = 1.7;
var companhia = false;
var problema = true;

var result = podeSubir(altura, companhia, problema);

function podeSubir(alturaPessoa, vemComCompanhia, temProblemaCardiaco) {
    
    let podeNaoPode = alturaPessoa >= 1.5 && vemComCompanhia == false && temProblemaCardiaco == false || alturaPessoa == 1.2 && vemComCompanhia == true || alturaPessoa == 1.2 && vemComCompanhia == true && !temProblemaCardiaco == false && alturaPessoa >= 1.5 && vemComCompanhia == false && temProblemaCardiaco == true && alturaPessoa >= 1.5 && vemComCompanhia == true && temProblemaCardiaco == true
    
    return podeNaoPode;
    
}

console.log(result);
*/


/*
var p1 = 1;
var p2 = 2;
var p3 = 3;
var pN = "Continue participando";

var resultadoPosto = medalhaSegundoOPosto(pN);
console.log(resultadoPosto);

function medalhaSegundoOPosto(posto) {
    if (posto == 1) {
        return "ouro";
    } else if (posto == 2) {
        return "prata";
    } else if (posto == 3) {
        return "bronze";
    } else {
        return "Continue participando";
    }
}
*/


/*
passandoPor();

function passandoPor() {
    for (var i = 0; i < 4; i++) {
        console.log("aqui eu tenho o valor de " + i);
    }
}
*/


/*
passandoPelosPares();

function passandoPelosPares() {
    for (var i = 0; i < 7; i+= 2) {
        console.log("aqui eu tenho o valor de " + i)
    }
}
*/


/*
var array1 = [1, 2];
var array2 = [4, 5];

var moverArray = mover(array1, array2);

    function mover(ar1, ar2) {
        ar1.pop(2);
        console.log(ar1);
        ar2.push(2);
        console.log(ar2);
    }
*/


/*
var diasDeTrabalho  = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"];

var workDays = diasDeTrabalho.indexOf ("osvaldo");

console.log(workDays);
*/


/*
var ar = [1, 6, 7, 6];
var n = 7;

var contemNumero = contem(ar, n);

function contem(array, numero) {
    var temNumero = array.indexOf(numero);

    if (temNumero == -1) {
        return false;
    } else {
        return true;
    }
}

console.log(contemNumero);
*/


/*
var mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

var frase = ["esse", "cachorro", "tem", "a", "cauda", "peluda"];

console.log(mesesDoAno[1]);
console.log(frase[2]);
*/


/*
var n = 0;

var medalha = medalhaDeAcordoComPosto(n);

function medalhaDeAcordoComPosto(numero) {
    var tipoMedalha = ["ouro", "prata", "bronze", "nada", "nada"];
    var posicao = [0, 1, 2, 3, 4];

    var resultado = posicao.indexOf(numero);

    if (resultado != -1){
        return tipoMedalha[resultado];
    }  
}

console.log(medalha);
*/


/*
var n = 1;
var medalha;

for (var j = 0; j < n; j++) {
    medalha = medalhaDeAcordoComPosto(j);
    console.log(medalha);
}

function medalhaDeAcordoComPosto(numero) {
    var tipoMedalha = ["ouro", "prata", "bronze", "nada", "nada"];
    var posicao = [0, 1, 2, 3, 4];
    var resultado = posicao.indexOf(numero);

        if (resultado != -1) {
            return tipoMedalha[resultado];
        }
}
*/


/*
var lucrosPrimeiroTrimestre = [80, 453, 1000];

var totalLucrosPrimeiroTrimestre = somaLucroSemestre(lucrosPrimeiroTrimestre);

function somaLucroSemestre(lucros) {
    var somaLucros = lucros[0] + lucros[1] + lucros[2]

    return somaLucros;
}

console.log(totalLucrosPrimeiroTrimestre);

*/


/*
var ar = [10, -10, 2, 100];


var total = saldoDeMesesComLucro(ar);
			
    for (var i = 0; i < total.length; i++) {
        console.log(total[i]);
    }


function  saldoDeMesesComLucro(lucros) {
			
    var quantidade = [lucros.length];
    
    
    for (var i = 0; i < lucros.length; i++) {
        if (lucros[i] > 0) {
            quantidade[i] = lucros[i];
        } else {
            lucros.splice([i], 1);
        }
    }
    return lucros;
}
*/


/*
function naipeDeTruco(naipe) {

     return ["1", "2", "3", "4", "5", "6", "7", "10", "11", "12"].map(function(tipo) {
    
       return [tipo, naipe].join(' de ');
    
     });
    
    }
    
    console.log(naipeDeTruco('espadas'));
    console.log(naipeDeTruco('paus'));
*/


/*
var num = [1, 4, 7];

var resultado = produto (num);

function produto (prod) {

    var cont = 1;

    for (let i = 0; i < prod.length; i++) {
        cont = prod[i] * cont;
    }

    return cont;
}

console.log(resultado);
*/


/*
var numero = 6;

var resultado = fatorial(numero);

function fatorial(numFatorial) {

    var fat = 1;

    for (let i = numFatorial; i > 1; i--) {
        fat = fat * i;
    }

    return fat;
}

console.log(resultado);
*/


