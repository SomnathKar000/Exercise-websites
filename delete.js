function creatcourse( name ){
    return {
        StudentName: name,
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
    
};

const coursename = creatcourse("Java");

// console.log(coursename);


delete coursename.title;
coursename.intro = function(){
    console.log("It is a Java Script course");

}
// console.log(coursename);

coursename.id = 4525655;
console.log(coursename.constructor);

