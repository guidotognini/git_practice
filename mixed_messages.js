//Declare three arrays containing the words
const subject = ['swimmer', 'boxer', 'gymnast', 'cyclist'];
const action = ['bounces', 'shots', 'hits'];
const object = ['basketball', 'soccer ball', 'volleyball', 'golf ball'];

//Declares the function to randomly pick a word in the array
const word = arr => {
  return arr[Math.floor(Math.random()*arr.length)];
}

//Prints a phrase to the user with the 3 random words as arguments
console.log(`The ${word(subject)} has grown tired of his former sport and now ${word(action)} the ${word(object)} to try something new`);

