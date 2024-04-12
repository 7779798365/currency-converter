#! /usr/bin/env node

import inquirer from "inquirer"

const currency: any = {
    USD: 1, // Base currency
    PKR: 277.54,
    INR: 83.30,
    EURO: 0.92,
    GBP: 0.79,
    TRY: 32.03,
    QAR: 3.64,
    JPY: 151.61,
    RUB: 92.58,
    KRW: 1351.27,
};

let user_answer = await inquirer.prompt(
    [
      {
        name: 'from',
       message: "Enter from Currency",
       type: 'list',
       choices: ["USD","PKR","INR","EURO","GBP",
                "TRY","QAR","JPY","RUB","KRW"]         
      },
      {
        name: 'to',
        message: "Enter To Currency",
        type: 'list',
        choices:["USD","PKR","INR","EURO","GBP",
                 "TRY","QAR","JPY","RUB","KRW"]  
      },
      {
        name: 'amount',
        message: "Enter To Amount",
        type: 'number'
      }
    ]   
);




let fromAmount = currency[user_answer.from] // exchange rate
let toAmount = currency[user_answer.to]  // exchange rate 
let amount = user_answer.amount
let baseAmount = amount / fromAmount // USD base currency  // 4
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
