var name1 = 'Aayush ';
//name1= 10
var x1;
x1 = 10;
x1 = true;
x1 = 'rohan';
console.log('value of x1', x1);
// unknown data type 
//* the unknown type is safer alternative to any because
// we can enforce type safety and type checking 
// unknown datatype can hold value of any type but must be perform
// with type checks and assesrtions before using specific way
var password;
password = 1234;
//password = 'aayush3456'
if (typeof password === 'string') {
    console.log('Valid password');
}
else if (typeof password === 'number') {
    console.log('Numbers are not allowed in password');
}
else {
    console.log('Invalid password');
}
var url = 'https://jsonplaceholder.typicode.com/todos';
// function  functioname() : returntype { body }
// new Promise()
function fetchData() {
    var response = fetch(url);
    return response;
}
function processData() {
    console.log('process data ....');
    var response = fetchData();
    console.log(response);
    if (typeof response === 'object') {
        console.log(response);
    }
}
processData();
