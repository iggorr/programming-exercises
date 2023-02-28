let mostExpensiveItem = array => {
    let result, total = 0;

    for (let i = 0; i < array.length; i++ ) {

        let newTotal = array[i].price * array[i].stock;

        if (newTotal > total) {
            total = newTotal;
            result = array[i];
        }
    }    
    return result;
}

let testData = [
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 }, 
    { item: "7up", price: 3.99, stock: 42 }, 
 ];

 console.log(mostExpensiveItem(testData));
