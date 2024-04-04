import inquirer from "inquirer";
import chalk from "chalk"

let mybalance = 100000
let pincode =2000

console.log(chalk.blueBright("\n\tWelcome to Atm machine:\n\t"))
 let pinans = await inquirer.prompt([
{
    name :"pin",
    message:chalk.yellow("Enter your pin number"),
    type:"number"

}

 ])
if(pinans.pin=== pincode){
    console.log(chalk.green("\nYour pin Number is correct\n"))
    
let operationans =await inquirer.prompt([
    {
        name :"option",
        message:chalk.yellow("Select an option"),
        type:"list",
      choices:["withdraw" , "Check Balance"]
    }
])

if(operationans.option=== "withdraw"){
let wa=await inquirer.prompt([
    {
        name:"withdrawmetod",
         type:"list",
         message:"Select a Withdraw Method",
         choices:["Fast cash" , "Enter Amount"]


    }
])
if(wa.withdrawmetod === "Fast cash"){
let fastcashans =await inquirer.prompt([
    {
        name:"fastcash",
        type:"list",
        message:chalk.yellow("Select Amount"),
        choices:[chalk.blue(1000 , 10000, 20000, 50000 ,100000)]
    }
]) 
if(fastcashans.fastcash > mybalance){
    console.log(chalk.red("Insufficient Balance"))
}else{
    mybalance-=fastcashans.fastcash
    console.log(`${fastcashans.fastcash} withdraw sucessfully !`)
    console.log(`Your Remaining Balance is ${mybalance}`)
}
}

else if(wa.withdrawmetod === "Enter Amount"){
    let amountans=await inquirer.prompt([
        {
            name:"amount",
            type:"number",
            message:"Enter your Amount to withdraw"
        }
    ])
    if(amountans.amount > mybalance){
        console.log("Insufficient Balance!")
    }else {
        mybalance-=amountans.amount
        console.log(`${amountans.amount} Withdraw Sucessfully`)
        console.log(`Your remaining balance is ${mybalance}`) 
    }
}


    
}else if (operationans.option==="Check Balance")
console.log(chalk.blue(`Your Account Balance is ${mybalance} `))

}else{
    console.log(chalk.red("Incorrect your pin number"! ,"Try again"))
}









