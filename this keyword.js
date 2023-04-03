// let counter ={
//     count : 0,
//     increment(){
//         this.count ++;
//     }
// }

// counter.increment();

// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.count);

// function counterIncress(){
//     return {
//         count : 0,
//         increment(){
//             this.count ++;
//         }
//     }    
// }
// let counter1 = counterIncress();
// let counter2 = counterIncress();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter2.increment();
// console.log(counter1.count);

// console.log(counter2.count);


// let count = 0;
// function incress(){
//     count ++;
// }
// incress();
// incress();
// incress();
// incress();

// console.log(count);


function car (name){
    this.name = name;
    this.run = function(){
        console.log(this.name +" is running");
        console.log(this);
    }
}

let lenovo = new car("Lenovo");
lenovo.run();
console.log(lenovo);


