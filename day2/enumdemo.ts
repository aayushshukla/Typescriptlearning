enum Roles {
    // default number start from 0
     tester,
     developer=100,
     uidesigner,
     backenddeveloper
}

type employee = {
    name : string,
    password : number,
    hobbies : string[],
    roles : Roles,
    address : [number,string,boolean] // it is tuple  it is fixed size and type 
}
//  let variable : typeofvaribale
const emp1 : employee= {
    name : 'aayush',
    password : 1234,
    hobbies : ['chess','cs go '],
   roles :Roles.developer,
   address:[1000,'delhi',true]
};

const emp2 : employee= {
    name :'Ashwini',
    password:4567,
    hobbies : ['football'],
    roles :Roles.tester , // enum.itemname,
    address : [2000,'Mumbai',true]
}

// console.log('Employee 2 details')
// console.log('Employee name',emp2.name)
// console.log('Employee Password',emp2.password)
// console.log('Employee1 Designation',emp2.roles)
// console.log('Employee2 Designation',emp1.roles)

const showWork : (employeedetail:employee) => string = (employeedetail:employee) : string => {
  const {name,roles,address} = employeedetail

  return roles === Roles.developer ? `${name} works in finacle city is ${address[1]}` :
  `${name} not part of finacle team`

}
emp1.address[1]='Banglore'
console.log(showWork(emp1))
console.log(showWork(emp2))

console.log(Roles[100]) // enum [number] it will retun name for given counter 
