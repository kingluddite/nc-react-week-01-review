// function greet() {
//     console.log('hello');
// }

// const greet = (name) => {
//  console.log(`hello ${name}`);
// }

// greet('Chad');
// greet('Andrea');

function hello(name) {
    return { studentName: name}
}

const hello = (name) => ({ studentName: name})