function show(msg) {
    return true;
}
show('hello');
function show1(msg) {
    return msg;
}
function showDetail(brandName, price) {
    var obj = {
        brand: brandName,
        value: price
    };
    return obj;
}
console.log(showDetail('H2O', 500));
console.log(showDetail('Adidas', '2000INR'));
console.log(showDetail(123, 100.56));
var res = show1('hello');
console.log(res);
console.log(show1(100));
var marks = [];
var names = [];
function productDetails(val) {
    return val;
}
console.log(productDetails({
    productName: 'Maggie',
    price: 10
}));
console.log(productDetails({ name: 'parle', price: 5 }));
console.log(productDetails('Myproduct'));
function getDbConnection(v1, v2) {
    return v2;
}
var db = {
    url: 'jdbc:mysql//localhost:3306',
    user: 'root',
    password: 1235
};
console.log(getDbConnection('MyDb', db));
