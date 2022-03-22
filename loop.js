let todoList = ['Go Shopping', 'Take a nap','Make Dinner','Walk Dogs','Do homework'];
//Looping through Array
for (let i = 0; i < todoList.length; i++) {
    const element = todoList[i];
    //console.log(element)   
}
//For and For of loops are used with arrays
for (let item of todoList) {
   // console.log(item)
}






let carObj = {
    make: 'Mazda',
    model: 'CX5',
    year: 2000,
    drive(){
        console.log('vroom vroom')
    }
}
let searchStr = 'make'
console.log(carObj[searchStr]) //Logs Mazda







for (let key in carObj) {
    let keyStr = key;
    console.log(keyStr);
    console.log(carObj[keyStr])
   //console.log(key,carObj['model'])
}