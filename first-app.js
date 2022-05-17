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

const arr=['apple','orange','mango','lemon'];
console.log(arr);
console.log(arr.map((fruit)=>{
    return 'fruit: '+fruit;
}));

//spread operator
const copiedArray=[...arr];
console.log(copiedArray);

//rest operator- it will bundle all the arguments in an array
const toArray=(...args) => {
    return args;
};

console.log(toArray(1,2,3,4));



/*
const obj1 = {'key1': 1}

const obj2 = { ...obj1}

if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}
*/

/*
const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)
*/

const printName=({name}) => {
    console.log(name);
}
printName(student);

const {name,age} =student;
console.log(name,age);

const [fruit1,fruit2]=arr;
console.log(fruit1,fruit2);


/*
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

	const { key1, key3}  = { ...obj1}

	

	console.log(key1, key3)
*/

/*
const arr1 = ['value1', 'value2']

	const [ val1, val2 ] = arr1



	console.log(val1)

	console.log(val2)
*/

/*
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

	let { key1, key3}  = obj1

	

	//key1 = 20;

	//key3 = 123;
    console.log(key1);
	console.log(obj1.key1, obj1.key3)
*/

/*
console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 3000)

console.log('d');
*/

/*
console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 3000)

setTimeout(() => console.log('d'), 0)

console.log('e');
*/

/*
const abcde= async () => {
	console.log('a');
	console.log('b');

	const logc=new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve('c');
		}, 3000);
	});

	const logd=new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve('d');
		}, 0);
	});

	let printc= await logc;
	console.log(printc);
	
	let printd= await logd;
	console.log(printd);

	console.log('e');
} 

abcde();
*/