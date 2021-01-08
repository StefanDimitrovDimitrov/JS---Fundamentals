function orders(item, quantity){

    total = itemchecker(item) * quantity


    function itemchecker(item){

        if(item == "coffee"){
            return 1.50
        }else if(item == "water" ){
            return 1
        }else if(item == "coke"){
            return 1.40
        }else if(item == "snacks"){
            return 2.00
        }
    }
    
    console.log(total.toFixed(2));

}
orders("water", 5)




// Write a function that calculates the total price of an order and prints it on the console. 
// The function should receive one of the following products: coffee, coke, water, snacks; and a quantity of the product. 
// The prices for a single piece of each product are: 
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
// Print the result formatted to the second decimal place.


// Example
// Input	Output
// water
// 5	5.00
// coffee
// 2	3.00
// Hints
// •	Create a function and pass the two variables in.
// •	Print the result in the method
