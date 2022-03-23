//Functions Exercise
function fence(num){
    console.log(`${num}.-`+` ~`.repeat(5));
}
fence(1);
//1
function fozzieBear(){
    console.log(`Wocka Wocka`);
}
fozzieBear();

fence(2);
//2
function beaker(speak){
    console.log(`${speak } `.repeat(4));
}
beaker(`Meep`);

fence(3);
//3
function muppetShow (a, b){
    if(a === `Muppet` && b === `Show`){
        console.log(`It's time to play the music. It's time to light the lights. `);
    }
}
muppetShow(`Muppet`, `Show`);

fence(4);
//4
function kermit(){
    console.log(`Kermit The Frog`);
}
kermit();



fence(5);
//5
function muppetShowSeasons(seasons){
    if (seasons === 5){
        console.log(true);
    } else {
        console.log(false);
    }
}
muppetShowSeasons(6);

fence(6);
//6
const manOrPuppet = function (){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrPuppet();

fence(7);
//7
rainbowConnection = () => console.log(`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`);
rainbowConnection();

//fence(8);
//8
/*
Q.-If a let or const variable is created/declared inside a function, loop, or conditional can the value of it be accessed outside of the function, loop, or conditional?

A.- False
*/

//fence(9);
//9
/*
Q.- If a let or const variable is created outside the scope of a function and the value of the variable is updated inside a function, then assuming the function has been run, could the updated value of the variable be accessed outside of the function?

A.- True
*/

//fence(10.1);
//10a
const newMuppetMovie = [
    `The Muppets`,
    `Muppets Most Wanted`
];

fence(10.2)
//10b

const upperMovies = newMuppetMovie.map(movie => movie.toUpperCase());

console.log(upperMovies);

/*
The map() method creates a new array with whatever method/function you apply on every element in the calling array 
*/

fence(`Bonus 11.1`);
//Bonus 11a
const oldMuppetsMovie = [
    `The Muppet Movie`, 
    `The Muppets Take Manhattan`, 
    `The Great Muppet Caper`, 
    `The Muppet Christmas Carol`, 
    `Muppet Treasure Island`,
    `Muppets From Space`
];

fence(`Bonus 11.2`);

const twoMovies = oldMuppetsMovie.filter(name => name.length == 22);

console.log(twoMovies);


//BONUS 12a
const charactersOne = [
    `Statler`, 
    `Waldorf`
];

//BONUS 12b
const charactersTwo = [
    `The Swedish Chef`, 
    `Animal`, 
    `Rowlf`
];

fence(`Bonus 12.1`)
//Bonus 12c


//  randomMuppet= characters =>{

//   characters[Math.floor(Math.random()*characters.length)]; 
//  console.log(characters);
//  }


//  randomMuppet(charactersOne[Math.floor(Math.random()*charactersOne.length)]);

//  randomMuppet(charactersTwo[Math.floor(Math.random()*charactersTwo.length)]);
 

 //better

 randomMuppet =  (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters.length)]}`);
}

randomMuppet(charactersOne);



fence(`Bonus 13`);


// caps = string => string.AlternateCase(string);

// caps(`hello worlds`);

// console.log(caps);
 
// const code = [`hello world`];
// console.log(code.indexOf(`hello world`));

// for (i=0; i<code.length; i++){
//     console.log();
//  if (i % 2 === 0){
//      console.log(code[i].toUpperCase);
//  }

// }

//splice try
// const tryHarder = function tryHarder(){
//     for(i=0; i<tryHarder.length; i++ ){
//         console.log(tryHarder[i]);
    
//     console.log(`${i} Outer Loop`);

//     //nested loop
//     for (x = 1; x < tryHarder.length; x++) {
//         console.log();
//         console.log(`${x}. Nested Loop`);
//     }
// }
// }


//13

// caps = string => {
//     let chars = string.toLowerCase().split(``);
//     for(i=0; i< chars.length; i+=2){
//         chars[i] = chars[i].toUpperCase();
//     }
//     console.log(chars.join(``));
// }

// caps(`Hello World`);

//or

// caps = string => {
//     return string.split(``).map((v, i)>= i% 2 ? v.toLowerCase(): v.toUpperCase()).join(``);
// }

// console.log(caps(`Hello World`));

//or

// caps = string => {
//     let newString = ``;
//     for (i=0; i< string.length; i++){
//         if (i% 2 === 0){
//             newString += string[i].toUpperCase();

//         }else{
//             newString += string[i].toLowerCase();
//         }
//     }
//     return newString;
// }

// console.log(caps(`Hello World`));

//13 extra extra

caps = string => {
    let count = 0;
    let newString = ``;
    for(i=0; i < string.length; i++){
        if (string[i] === ` `){
            newString += ` `;
        }else if (count % 2 === 0){
            newString += string[i].toUpperCase();
            count++;
        }else{
            newString += string[i].toLowerCase();
            count++;
        }
    }
    return newString;
}

console.log(caps(`Hello World`));