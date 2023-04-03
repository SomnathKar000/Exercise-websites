// let name =["S","o","m","n","a","t","h"," ","K","a","r"];
// console.log(name.join(""));
// name =name.join("-");
// name.split("-");
// console.log(name[0]);


let students =
[
    {
        name : "Somnath Kar",
        roll : 50000
    },
    {
        name : "Tanmoy Santra",
        roll : 40000
    },
    {
        name : "Sayan Konar",
        roll : 30000
    },
    {
        name : "Sayak Rana",
        roll : 20000
    }
];

// filter method

// console.log(students.filter(
//     city => {
//        return city.roll >=30000
//         }
// ))

// map method

console.log(students.map(
    city => {
       return city.roll *5
        }
))


