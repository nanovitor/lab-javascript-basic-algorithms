//1.1
const hacker1 = "Monday";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Tuesday";
console.log(`The navigator's name is ${hacker2}`);

//Contagem de caracteres para ambas as variáveis
//console.log(hacker1.length);
//console.log(hacker2.length);

//2.1
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name with ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}!`);
}

//3.2

let upper = hacker1.toUpperCase();

function addSpace(str) {
  return str.split("").join(" ");
}
console.log(addSpace(upper));

//EXPLICAÇÃO KAREN COM LOOP:

function exemploKaren(str) {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
      let upper = str.charAt(i).toUpperCase() + " ";
      newString += upper;
    }
    return newString;
  }
  console.log(exemploKaren(hacker1));

//TENTAIVA FAIL:
// const uppername = hacker1.toUpperCase();
// for (let i=0; i < hacker1.length; i++) {
//     console.log(uppername[i].toUpperCase + " "); }


//3.2
//i começa no último caractere do hacker 2
//i roda até ser menor ou igual a zero (ou !0)
//roda i = i-1
//x += y significa x = x + y

let nomeinvertido = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  nomeinvertido += hacker2[i];
}
console.log(nomeinvertido);


//3.3
//declaro uma array
//sort ela em ordem alfabetica
//se o array 1 for igual ao array 2 (depois de sort) são o mesmo nome
//se o hacker2 for o primeiro array depois do sort então é alfabeticamente primeiro
//else, o hacker1 é o primeiro
//quando eu crio uma função eu quero que ela passe qualquer tipo de argumento, não só o hacker

let array = [hacker1, hacker2];
console.log(array.sort());

function alpha(arr) {
  if (arr[0] == arr[1]) {
    console.log("What?! You both have the same name?");
  } else if (hacker2 === arr[0]) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("The driver's name goes first.");
  }
}
alpha(array);

