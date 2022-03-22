                    //0              1             2            3           4
let todoList = ['Go Shopping', 'Take a nap','Make Dinner','Walk Dogs','Do homework'];
//console.log(todoList[0]);
//Destructuring array - taking values out and assigning them to variables
let [zebra, item2, /*Spread operator - rest of items*/ ...theRest]= todoList;
//console.log(zebra,item2)
//console.log(theRest)



let carObj = {
    make: 'Mazda',
    model: 'CX5',
    year: 2000,
    drive(){
        console.log('vroom vroom')
    }
}
//Bracket notation
//console.log(carObj['model'])
let {make, model,year} = carObj;
console.log(make,model,`The year of our lord ${year}`)
console.log(carObj)
//Dot notation
//console.log(carObj.model);

/*console.log('ObjectKeys',Object.keys(carObj))
console.log('ObjectVals',Object.values(carObj))*/