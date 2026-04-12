// Write your solution in this file!
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

function addBurger(burgers){
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
    return burgers;

}
if(true){
        const anotherNewBurger='Maple Bacon Burger';
        burgers.push(anotherNewBurger);
}
console.log(addBurger(burgers));

function changeFeaturedDrink(featuredDrink){
    featuredDrink = 'The JavaShake' ;
    console.log(featuredDrink)
}
changeFeaturedDrink();