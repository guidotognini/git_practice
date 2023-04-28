const subject = ['swimmer', 'boxer', 'gymnast', 'cyclist'];
const action = ['bounces', 'shots', 'hits'];
const object = ['basketball', 'soccer ball', 'volleyball', 'golf ball'];

const word = arr => {
  return arr[Math.floor(Math.random()*arr.length)]
}

console.log(`The ${word(subject)} has grown tired of his former sport and now ${word(action)} the ${word(object)} to try something new`)

