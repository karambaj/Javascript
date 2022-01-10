

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
si lun des oeérandes est une chaîne de caractères, l’autre est automatiquement converti en chaîne de caractères.

Par exemple :

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
Exceptions: alert(2 + 2 + '1' ); // "41" et non "221"   (Attention cela va de gauche a droite)
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
counter++;      // fonctionne de la meme maniere que counter = counter + 1, mais c'est plus court
alert( counter ); // 3


Utile:
let counter = 2;
counter--;      // fonctionne de la meme maniere que counter = counter - 1, mais c'est plus court
alert( counter ); // 1
*/


/*
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
La soustraction est toujours convertie en nombres, donc elle fait de " -9 " un number -9 (en ignorant les espaces qui lentourent).
*/

/*
let age = 20;
let accessAllowed = (age > 18) ? true : false;
(CONDITION) ? true : false;
alert(accessAllowed);
*/

/*
let nombre = prompt("Quel numero a entrer" , "");

if nombre == "0" {
    alert(0);
}
else if (nombre < 0 ){
    alert(-1);
}
else{
    alert(0);
}






Objets

nom: valeur 
key = nom ou identifiant
user[key] = valeur
Une propriete c'est une paire  
{} : paires (a l'interieur il y a cle : valeur)
Creatioin d'une propriete
let user = {};
ou
let user = new Object();







Conversion automatique tout type en str
Par exemple, un nombre 0devient une chaine "0"lorsqu'il est utilise comme cle de propriete
Les autres types sont automatiquement convertis en chaines.

let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)


Ajout du text ( doit se faire avec des guillemets)
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true





let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"


let user = {
  name,  // same as name:name
  age: 30
};


Parcourir un objet
 for (let key in obj)

typeof obj[key]
le type d'un objet




Let in (parcourir un objet)
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}



Clonage
Clonage dun objet
let clone = Object.assign({}, user);


Fusion: Object.assign
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

Clonage imbrique
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182


Creation dune methode
user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)


Creation du constructeur
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack"); (Variable de type user)

alert(user.name); // Jack
alert(user.isAdmin); // false










*/




