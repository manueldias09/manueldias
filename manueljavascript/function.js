/*   let coffeIsGrinding = false;

   Const pressGrindingBeans = () => {
    if (coffeIsGrinding) { 
        console.log("stopping the grind");
        coffeIsGrinding = false;
} else {
    console.log("Grinding is about to begin");
    coffeIsGrinding = true;
}
}

pressGrindingBeans();


Const takeOrder = (size, drinkType) => {
    console.log(`order received: ${size} ${coffe}');

}
coffeeOrder("mediun","coffe");

/*

const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(7,3);
console.log(addUP(2,5));



const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths (celsius) + 32;
};

console.log("The temperature is " + getFahrenheit (15) +"F");
// Output: The temperature is 59 F
*/


//Activity 1

let orderCount = 0;

const takeOrder = (topping, desert) => {
    console.log(`Pizza with ${topping} and a ${desert}`)
    orderCount++;
    console.log(orderCount)
}

takeOrder("pineapple","coke");
takeOrder("onion","cookie");
takeOrder("pepper","icecream");


//Actitivity 

let accBal = 400;
let accPin = 1234;
const cashMachine = (pinNum, cash) => {
    if (pinNum == accPin && cash <= accBal) {
        console.log(`Your PIN is correct and the ${cash} you requested is being dispensed!`)    
    } else if (pinNum != accPin) {
        console.log(`PIN number is incorrect!. Please try again.`);
    } else {
        console.log(`Insufficient funds in your account! Please check and try again.`);
    }
}
cashMachine(1234, 300);
cashMachine(1235, 300);
cashMachine(1234, 410);
cashMachine(1235, 500);


//Activity

const sandwichOrder = 

const takeorder = toppings(1,2,3,4,5)
