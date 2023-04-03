// const array =[1,2,3,45,6,5,78];

const array = new Array(1,2,3,45,6,5,78);
array.push(99);
array.unshift(0);
array.pop();
array.shift();
// console.log(array);

const names =["Somnath","Rahul", "Soham", "Tanoy", "Subhodeep","Deep","Dipan","Anik"];
// console.log(names.indexOf("Rahul"));
// console.log(names.lastIndexOf("Anik"));
// console.log(names.includes("Soham"));

let students =
[
    {
        name : "Somnath Kar",
        roll : 26300119024
    },
    {
        name : "Tanmoy Santra",
        roll : 26300119038
    },
    {
        name : "Sayan Konar",
        roll : 26300119029
    },
    {
        name : "Sayak Rana",
        roll : 26300119026
    }
];
// console.log(students);

// console.log(students.find(function(element){
//     return students.roll === 26300119024
// }))

// console.log(students.find(element => element.roll === 26300119024
// ));

