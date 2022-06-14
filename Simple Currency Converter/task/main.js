const input = require('sync-input');
let option = 0;
const isCurrency = (currency, list) => Object.keys(list).includes(currency);
const isNumber = number => !isNaN(number);
const isGreaterThan1 = number => number >= 1;

currencies =
    {
        "USD": 1,
        "JPY": 113.5,
        "EUR":0.89,
        "RUB":74.36,
        "GBP":0.75
    }


console.log("Welcome to Currency Converter!");
console.log("1 USD equals  1 USD");
console.log("1 USD equals  113.5 JPY");
console.log("1 USD equals  0.89 EUR");
console.log("1 USD equals  74.36 RUB");
console.log("1 USD equals  0.75 GBP");


do {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    option = Number(input(""));
    if (!isNumber(option) || (option != 2 && option != 1)) {
        console.log("Unknown input");
    } else {
        switch (option) {
            case 1:
                convertProcess();
                break;
            case 2:
                console.log("Have a nice day!");
                break;
        }
    }

} while (option !== 2);




function convertProcess() {
    console.log("What do you want to convert?")
    let from = input("From: ").toUpperCase();
    if (!isCurrency(from, currencies)) {
        console.log("Unknown currency");
    } else {
        let to = input("To: ").toUpperCase();
        if (!isCurrency(to, currencies)) {
            console.log("Unknown currency");
        } else {
            let amount = input("Amount: ");
            if (!isNumber(amount)) {
                console.log("The amount has to be a number");
            } else if (!isGreaterThan1(amount)) {
                console.log("The amount can not be less than 1");
            } else {
                let converted = (amount / currencies[from] * currencies[to]).toFixed(4);
                console.log(`Result: ${amount} ${from} equals ${converted} ${to}`);
            }

        }
    }
}









