function fuelMoney(distance, passengers, price){
    let fuelConsumption = (distance/100) * 7 + (0.100 * passengers)
    console.log(`Needed money for that trip is ${(fuelConsumption * price)}lv.`);
}

fuelMoney(90, 14, 2.88)

// •	Calculate the fuel by knowing that an empty bus can pass 100 km with 7L diesel.
// •	One person in that bus excluding the driver increases fuel consumption by 100 milliliters.
// •	The money is calculated by multiplying the fuel price with the needed fuel for the trip.

// As input you will receive 3 parameters (the distance the bus must travel, the passengers in it and the price for 1 liter of diesel)