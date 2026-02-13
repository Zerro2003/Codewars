function sayHi(firstName:string, lastName:string):string{
const Person = {
        first:firstName,
        last:lastName
    }
    return `Hi, i'am ${Person.first} ${Person.last} and it is  nice to meet You.`
}
console.log(sayHi('Mugisha','Elie'))