const course ={
    title : "course",
    enroll(){
        console.log("Welcome")
    }
}
// for(let key in course){
//     console.log(key, course[key]);
// }

const DBMS ={};

for (let key of Object.keys(course)){
    // console.log(key,course[key]);
    DBMS[key]= course[key];
}
console.log(DBMS);