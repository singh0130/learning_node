const fs=require('fs');
fs.writeFileSync('hello.txt','Hello from Node.js');
console.log('hello world');

const prod= (a,b) => {
    return a*b;
}

console.log(prod(5,2));

const student={
    name:'Mohit',
    age:24
}
console.log(student.name);