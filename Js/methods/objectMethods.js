let members = [
    {
        name: "Sanya",
        age: 66
    }
]

let names = members.map(user => user.name)
console.log(names);


members.forEach(user => console.log(`${user.name} is ${user.age} years old`))

