#! /usr/bin/env node
import inquirer from "inquirer";
let totalBalance = 10000;
const pinNumber = 1234;
let pinEntered = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "Enter 4 digit code"
    }]);
//console.log(pinEntered.pin);
if (pinEntered.pin === pinNumber) {
    let atmQuestions = await inquirer.prompt([{
            name: "accounType",
            type: "list",
            message: "select your account type: ",
            choices: ["Current Account", "Saving Account",]
        },
        {
            name: "transMethod",
            type: "list",
            message: "Select your transaction Method",
            choices: [
                "Cash Withdrawal", "Fast Cash"
            ]
        }
    ]);
    if (atmQuestions.transMethod == "Cash Withdrawal") {
        let cashwithrawalAmount = await inquirer.prompt([{
                name: "withdrawal",
                message: "Enter the amount you want to withdraw",
                type: "number",
            }
        ]);
        // Greater than or equals to operator
        if (totalBalance >= cashwithrawalAmount.withdrawal) {
            totalBalance -= cashwithrawalAmount.withdrawal; //totalBalance = totalBalance - cashwithrawalAmount
            console.log(`your Total Balance is : ${totalBalance}`);
        }
        else {
            console.log(`Insufficient Balance`);
        }
    }
    else {
        let fastCashAmount = await inquirer.prompt([{
                name: "fastCash",
                type: "list",
                message: "Select Amont you want to withdrawal",
                choices: [1000, 3000, 5000]
            }]);
        if (totalBalance >= fastCashAmount.fastCash) {
            totalBalance -= fastCashAmount.fastCash;
            console.log(`your total Balance is : ${totalBalance}`);
        }
        else {
            console.log(`Insufficient Balance`);
        }
    }
}
