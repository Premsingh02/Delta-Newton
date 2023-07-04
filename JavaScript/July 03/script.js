try {
    // const obj = {};
    // js throwing error
    // obj.test.name;
    const bankAccount = {};
    bankAccount.amount = 1000;
    bankAccount.accountUser = "Prem";

    const newBalance = bankAccount.amount - 200;

    if(newBalance<0){
        throw new Error ("Not enough balance");
    }

    bankAccount.amount = newBalance;
    console.log("new balance of " + bankAccount.accountUser + " is "+ newBalance);
} catch (error) {
    console.error(error.message);
    // console.error("error has occurred");
}