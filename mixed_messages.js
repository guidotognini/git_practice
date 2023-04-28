const subject = ['swimmer', 'boxer', 'gymnast', 'cyclist'];
const action = ['bounces', 'shots', 'hits'];
const object = ['basketball', 'soccer ball', 'volleyball', 'golf ball'];

let sub_element = subject[Math.floor(Math.random()*subject.length)]
let act_element = action[Math.floor(Math.random()*action.length)]
let obj_element = object[Math.floor(Math.random()*object.length)]

console.log(`The ${sub_element} has grown tired of his former sport and now ${act_element} the ${obj_element} to try something new`)

