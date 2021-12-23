

//Base du Javasript



/*
let hello = 'Hello world!';

let message;

// copier 'Hello world' de hello vers message
message = hello;

// maintenant les deux variables contiennent les mêmes données
alert(hello); // Hello world!
alert(message); // Hello world!
*/



//Constante (Valeur n echange jamais)
/*
cst age = 45;
let categorie = age;
*/


/*
const COLOR_ORANGE = "#FF7F00";

// ... quand il faut choisir une couleur
let color = COLOR_ORANGE;
alert(color); // #FF7F00



let admin, name;
(si il y a des noms le mettre en chaine de caratères)

name = "John";

admin = name;

alert(admin);
*/



/*
let age= null;

alert(age);

Null pour assigner une valeur “vide” ou “inconnue” à une variable, tandis que undefined est réservé comme valeur initiale par défaut pour les éléments non attribués.
*/


/*
typeof 0
Number
L'opérateur typeof renvoie une chaîne qui indique le type de son opérande.
*/



/*
let name = "John";

// une variable encapsulée
alert( `Hello, ${name}!` ); // Hello, John!

// une expression encapulée
alert( `the result is ${1 + 2}` ); // le résultat est 3
*/


/*
L'utilisateur doit compléter
let age = prompt('How old are you?', 100); (on est pas obligé de mettre deux arguments)
How old are you : Question principal
Deuxieme : Réponse juste en bas
alert(`You are ${age} years old!`); // You are 100 years old!
Renvoie (à compléter)
let test = prompt("Test"," "); (à mettre sur internet explorer)
*/


/*
L'utilisateur doit apppuyer sur ok 
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true si OK est pressé
*/

/*
let age = prompt('How old are you?', 100); 
alert('You are ${10} years old!'); // You are 100 years old!
*/


/*
Transformer une chaîne de caractère en nombre
let str = "123";
alert(typeof str); // string

let num = Number(str); // devient un nombre 123

alert(typeof num); // nombre
*/


/*
Concaténation
si l’un des opérandes est une chaîne de caractères, l’autre est automatiquement converti en chaîne de caractères.

Par exemple :

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
Exceptions: alert(2 + 2 + '1' ); // "41" et non "221"   (Attention cela va de gauche à droite)
*/


/*
On ne l'utilise jamais
let counter = 0;
alert( ++counter ); // 1

Utile
let counter = 0;
alert( counter++ ); // 0



Avec Counter
let counter = 2;
counter++;      // fonctionne de la même manière que counter = counter + 1, mais c'est plus court
alert( counter ); // 3


Utile:
let counter = 2;
counter--;      // fonctionne de la même manière que counter = counter - 1, mais c'est plus court
alert( counter ); // 1
*/


/*
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
La soustraction est toujours convertie en nombres, donc elle fait de " -9 " un number -9 (en ignorant les espaces qui l’entourent).
*/

/*
let age = 20;
let accessAllowed = (age > 18) ? true : false;
(CONDITION) ? true : false;
alert(accessAllowed);
*/

/*
let nombre = prompt("Quel numéro à entrer" , "");

if nombre == "0" {
    alert(0);
}
else if (nombre < 0 ){
    alert(-1);
}
else{
    alert(0);
}
*/
