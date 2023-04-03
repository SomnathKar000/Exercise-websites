const course = {
    title: "Java Script",
    enroll(){
        console.log("Welcome to js course")
    }
}

// const course_1 = {...course};
// course_1.title = "C++";
// console.log(course_1);

const course_1 = Object.assign({},course);
console.log(course_1);
