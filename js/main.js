
function redirecionar(){
    //outra aba
    window.open("https://www.linkedin.com/in/joão-pedro-da-costa-santos-29b0841a3/");
    //mesma aba
   // window.location.href = "https://www.linkedin.com/in/joão-pedro-da-costa-santos-29b0841a3/";
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Clique aqui, urgente!</b>";
  //  console.log(document.getElementById("agradecimento"));
 //   alert("Obrigado por clicar");
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   elemento.innerHTML = "Obrigado por passar o mouse";
    // alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    } else{
        validar = false
    }
    return validar;
}


var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/
//alert(soma(5, 10));


//var d = new Date();
//alert(d.getMonth()+1);
//alert(d.getDay());

/*
var count;
for(count=1; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
//    alert(count);;
    count++;
}
*/
/*
var idade = prompt("Qual sua idade");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça","pêra", "laranja"];
//lista.pop();
//lista.push("uva");

//console.log(lista);
//console.log(lista.join(" - "));
//console.log(lista.toString());
//console.log(lista.length);
//console.log(lista.reverse());



/*
var nome = "João Pedro";
var idade = 22;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade +" anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
//console.log(frase.replace("Japão","Brasil"));
*/