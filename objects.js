let lecture = 10;
let section = 3;
let title = "Java script";

const course ={
    lecture: 10,
    section: 3,
    title: "Java Script",
    note: {
        introduction: "Welcome to js course"
    },
    enroll(){
        console.log("You are succesfully enrolled")
    }
};

course.enroll();

course.price = 666;
console.log(course);

// function creatcourse( name ){
//     return {
//         StudentName: name,
//         lecture: 10,
//         section: 3,
//         title: "Java Script",
//         note: {
//             introduction: "Welcome to js course"
//         },
//         enroll(){
//             console.log("You are succesfully enrolled")
//         }
//     };
    
// };

const data = creatcourse("Data");


delete creatcourse.section;

console.log(data);

const DataCourse =creatcourse("Somnath Kar");

DataCourse.enroll();
console.log(DataCourse);

// Constructor function

// function Course(title){
//     this.title = title,
//     this.enroll = function(){
//         console.log("You succesfully enrolled");
//     }
// }

const app = new Course("App Devolpment");
app.enroll();

