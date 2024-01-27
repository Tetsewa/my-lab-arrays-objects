
//Objects:Time to practice (1)
/*We have received a request from the Public Library to send them an example of what would be a good way to organize their user registry:

They want to track user’s information (user id and full name), and which books each user has.
For each book, they want to have some information about the book: title, author, category and ISBN.

const user={name:"Ama", id: 16}
const book1={title: "Purpose Driven Life: What On Earth Am I Here For", author: "Rick Warren", isbn:9780310335511, category:"religion"}
const book2={title:"The Girl Who Can", author: "Ama Ata Aidoo", isbn:978043591013, category:"African fiction"}
//const books=[book1,book2]

user.books=[book1,book2]
//console.log(user)

//create the library and add the user object into the library array.
const library=[]
library.push(user)
//console.log(library[0].books)

//Let’s pick up a new book from the library. That means we will have to add a new book inside the user.books array.
const book3={title:"Prayer", author:"Timothy Keller", isbn: 9780143108580, category:"religion"}
library[0].books.push(book3)
//console.log(library[0].books)

//console.log(library[0].books[0])

// Expected output
// {
//     title: 'Purpose Driven Life: What On Earth Am I Here For',
//     author: 'Rick Warren',
//     isbn: 9780310335511,
//     category: 'religion'
//   }

//Bonus iteration: Let’s iterate! To finish this exercise, let’s iterate over the users and the books. We have to get a list of the users and the books that have each user.
//user in this code below is just a placeholder, it could be just anything
library.forEach(user=>{
    user.books.forEach(book=>{
        console.log(book.title);
    })
})
library.forEach(user=>{
    user.books.forEach(book=>{
        console.log(book.author);
    })
})


let olympicRecords = {
  athletics100Men: 'Usain Bolt',
  athleticsLongJumpMen: 'Mike Powel',
  swimming200Men: 'Michael Phelps',
  swimming400Women: 'Katie Ledecky'
};
//    placeholder, can be any word
//       |
for (let bag in olympicRecords) {
  console.log(bag);
}

const students = [
    { name: "Bob", age: 17 },
    { name: "Susy", age: 18 },
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Bill", age: 19 }
  ];
  //adding to arrays/objects
  const bob = { name: "Bob", age: 21 };
  students.push(bob);
  //another way to add to arrays/objects
  students.push({ name: "Steve", age: 25 });
  console.log(students);
  
  console.log(students[0].name);
  console.log(students[3].age);
  

 //Nested Data Structures

 //1. Arrays in Arrays

const classes = [
    [
      { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
      { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
      { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
      { firstName: 'Lulu', lastName: 'Considine', age: 20 },
      { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
    ],
    [
      { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
      { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
      { firstName: 'Emie', lastName: 'Franecki', age: 29 },
      { firstName: 'Okey', lastName: 'Runte', age: 18 },
      { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
    ],
    [
      { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
      { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
      { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
      { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
      { firstName: 'Stanley', lastName: 'Hand', age: 22 }
    ],
    [
      { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
      { firstName: 'Mervin', lastName: 'Blick', age: 28 },
      { firstName: 'Damien', lastName: 'Rohan', age: 28 },
      { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
      { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
    ],
    [
      { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
      { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
      { firstName: 'Braeden', lastName: 'Walker', age: 26 },
      { firstName: 'Derick', lastName: 'Weber', age: 22 },
      { firstName: 'Robert', lastName: 'Beatty', age: 30 }
    ]
  ];
  //console.log(classes[0][1])
  //Retrieve the second “classroom” of students
  //console.log(classes[1])

  //Retrieve the first name “Antonette”
//console.log(classes[4][0].firstName)
  //To find the index of a value in the nested array with objects
// const index = classes.findIndex(arr => arr.some(obj => obj.firstName === 'Antonette'));

// console.log(index); // Output: 4


//Retrieve the age 18
console.log(classes[1][3].age)


//2. Objects inside of Objects
//Example 1
const classRoom = {
    teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
    students: [
      { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
      { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
      { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
      { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
      { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
    ]
  };
  
  console.log(classRoom.students[2].firstName); // <== 'Jan'
  
  console.log(classRoom.teacher.age); // <== 25
*/
  //Example 2
const school = {
  name: "Fake School 1",
  classRooms: [
    {
      teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
      students: [
        { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
        { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
        { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
        { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
        { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
      ]
      },
    {
      teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
      students: [
        { firstName: 'Manley', lastName: 'Doyle', age: 18 },
        { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
        { firstName: 'Sid', lastName: 'Rohan', age: 30 },
        { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
        { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
      ]
    }
  ]
}

console.log(school.name); // <== "Fake School 1"

console.log(school.classRooms[1].students[4].firstName)
