//exercicio 1
function notas(n1,n2){
    notas(15,10);
var media = n1 + n2/2;
    if (media >= 9.5)
        console.log("Aprovado")
    else
        console.log("Reprovado")
    return
}



//exercicio 2
function meses (m1){
    if (m1 == 1){
        console.log("Janeiro");
    }
    else if (m1 == 2){
        console.log("Fevereiro");
    }
    else if (m1 == 3){
        console.log("Março");
    }
    else if (m1 == 4){
        console.log("Abril");
    }
    else if (m1 == 5){
        console.log("Maio");
    }
    else if (m1 == 6){
        console.log("Junho");
    }
    else if (m1 == 7){
        console.log("Julho");
    }
    else if (m1 == 8){
        console.log("Agosto");
    }
    else if (m1 == 9){
        console.log("Setembro");
    }
    else if (m1 == 10){
        console.log("Outubro");
    }
    else if (m1 == 11){
        console.log("Novembro");
    }
    else if (m1 == 12){
        console.log("Dezembro");
    }
    else{
        console.log("Não é um mês válido!")
    }
}
meses(8)

//Exercicio 3
function calculator(c1,operador,c2){
    if (operador == "+"){
        var c = (c1+c2);
        console.log("A soma é: ", c);
    }
    else if (operador == "-"){
        var c = (c1-c2);
        console.log("A subtração é: ", c);
    }
    else if (operador == "*"){
        var c = (c1*c2);
        console.log("A multiplicação é: ", c);
    }
    else if (operador == "/"){
        var c = (c1/c2);
        console.log("A divisão é: ", c);
    }
    else{

    }
}
calculator(3,"*",8)

//Exercicio 4

function soma(valor){
    var s = 0
    for (var i = 1; i <= valor; i++){
        s = s + 1;
    }
    console.log(s);
}
soma(500)

//Exercicio 5

function fatorial(n){
    var F1 = n
    var F2 = n-1;
    for(var i = F2; i > 1;i--){
        F1*=i;
    }
}

//Exercicio 6

function minimo(){
    var array= [2, 7, 9, 0, 11];
    var min = array[0];
    for(var i = 1; i< array.lenght; i++){
        if (array[i] < min)
        min = array[i]
    }    
}

function maximo(){
    var array = [2, 7, 9, 0, 11];
    var max = array[0];
    for(var i = 1; i< array.lenght; i++){
        if (array[i] > max)
        max = array[i]
    }
}


