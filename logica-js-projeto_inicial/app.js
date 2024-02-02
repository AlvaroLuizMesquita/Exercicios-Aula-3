let nome ='Álvaro';
console.log (`Olá ${nome}`);
alert (`Olá ${nome}`);
let linguagem = prompt ('Qual a linguagem de programação que você mais gosta?');
console.log (`A linguagem que eu mais gosto? ${linguagem}`);
let valor1 = 15
let valor2 = 20
let resultado = valor1 + valor2;
console.log (`O resultado da soma entre o ${valor1} e o ${valor2} é = ${resultado}`);
let valor3 = 55
let valor4 = 40
let resultado2 = valor3 - valor4
console.log (`A diferença entre o ${valor3} e o ${valor4} é igual a ${resultado2}`);

let idade = prompt ('Digite sua idade')
    if (idade >= 18) {
        console.log ('Parabéns, já pode beber chopp');
    }
    else {console.log ('Meus pesâmes, não vai poder beber chopp')};

let numero = prompt ('Digite um número');
    if (numero > 0) {console.log (`O numero ${numero} é positivo`);}
    else if (numero == 0) {console.log(`O numero ${numero} é 0`);
    } else {console.log (`O numero ${numero} é negativo`);}

console.log('Contador de Números: ')
let contador = 1
while (contador <= 10){
    console.log(`Contagem progressiva do contador: ${contador}`);
    contador++
    //contador = Contador +1 
}

let nota = prompt ('Digite a Nota');
    if (nota >= 7) {console.log (`Parabéns, sua nota final foi ${nota}. Você está APROVADO!`)}
    else {console.log (`Infelizmente sua foi ${nota}. Logo, você foi REPROVADO!`)}

let numeroAleatorio = Math.random ()
console.log (numeroAleatorio);

let numeroAleatorio2 = parseInt (Math.random () * 10 + 1)
console.log (numeroAleatorio2);

let numeroAleatorio3 = parseInt (Math.random () * 1000 + 1)
console.log (numeroAleatorio3);

