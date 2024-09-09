var Roles;
(function (Roles) {
    // default number start from 0
    Roles[Roles["tester"] = 0] = "tester";
    Roles[Roles["developer"] = 100] = "developer";
    Roles[Roles["uidesigner"] = 101] = "uidesigner";
    Roles[Roles["backenddeveloper"] = 102] = "backenddeveloper";
})(Roles || (Roles = {}));
//  let variable : typeofvaribale
var emp1 = {
    name: 'aayush',
    password: 1234,
    hobbies: ['chess', 'cs go '],
    roles: Roles.developer,
    address: [1000, 'delhi', true]
};
var emp2 = {
    name: 'Ashwini',
    password: 4567,
    hobbies: ['football'],
    roles: Roles.tester, // enum.itemname,
    address: [2000, 'Mumbai', true]
};
// console.log('Employee 2 details')
// console.log('Employee name',emp2.name)
// console.log('Employee Password',emp2.password)
// console.log('Employee1 Designation',emp2.roles)
// console.log('Employee2 Designation',emp1.roles)
var showWork = function (employeedetail) {
    var name = employeedetail.name, roles = employeedetail.roles, address = employeedetail.address;
    return roles === Roles.developer ? "".concat(name, " works in finacle city is ").concat(address[1]) :
        "".concat(name, " not part of finacle team");
};
emp1.address[1] = 'Banglore';
console.log(showWork(emp1));
console.log(showWork(emp2));
console.log(Roles[100]); // enum [number] it will retun name for given counter 
