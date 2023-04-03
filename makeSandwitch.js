let bread1 = prompt("Which bread would you like to have :- ");
let veggies1 = prompt("What are your fevorite veggies :- ");
let sause1 = prompt("Which sause would you like to have :- ");
function makeSandwitch(bread , veggies, sause){
    let sandwitch = bread + " bread " + veggies + " " + sause +" sandwitch ";
    return sandwitch;
}
let vegSandwitch = makeSandwitch(bread1, veggies1, sause1);
console.log(vegSandwitch);