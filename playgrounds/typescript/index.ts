const Person : {firstName?: string, lastName?: string, birthdate?: object, hobbies?: string[]} = {
    firstName: "Matt",
    lastName: "Monroe",
    birthdate: {
        year: 2001,
        month: 2,
        day: 9
    },
    hobbies: ['Sci-fi', 'Dystopian books', 'Gym', 'Yoga', 'Running'],
};

console.log(Person);
// TODO Fix the issue with the implicit conversion of the "Person" variable type from "const" to "var"