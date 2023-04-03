
// get an array of all names

// let name = students.map((element)=>{
//     return element.name
// })

// console.log(name);

// get an array of objects with just name and height

// let nameHeight = students.map(
//     (elementn)=>{
//         return {name : element.name, height : element.height}
//     }
// );
// console.log(nameHeight)

// get the total height of all characters

// let allheight = students.reduce((preHeight, character)=>{
//     return preHeight + character.height;
// },0);
// console.log(allheight);

let students =
[
    {
        name : "Somnath Kar",
        roll : 50000,
        age : 19,
        height : 163,
        gender : "male"
    },
    {
        name : "Tanmoy Santra",
        roll : 40000,
        age : 19,
        height : 159,
        gender : "male"
    },
    {
        name : "Sayan Konar",
        roll : 30000,
        age : 19,
        height : 160,
        gender : "male"
    },
    {
        name : "Sayak Rana",
        roll : 20000,
        age : 19,
        height : 156,
        gender : "male"
    },
    {
        name : "Subhra Maitra",
        roll : 40000,
        age : 19,
        height : 150,
        gender : "female"
    }
];

// height greater tham 160

// let greater = students.filter(
//     (element) =>
// {
//     return element.height > 160
// })
// console.log(greater)

// let sortName = students.sort(
//     (char1,char2) =>{
//         if (char1.name > char2.name){
//             return -1;
//         }
//         if (char1.name < char2.name){
//             return 1;
//         }
//         return 0
//     }
// )

// console.log(sortName);

// does every charactor have height more than 150

// console.log(students.every((element)=>{
//     return element.height > 150;
// }))

// is there at least one female charactor

// console.log(students.some((element)=>{
//     return element.gender == "female";
// }))


