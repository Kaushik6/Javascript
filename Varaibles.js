const accountId=12345;
let accountEmail="barikkaushik48@gmail.com";
var accountPassword="1234";
accountCity="Odisha";
let accountState;
//accountId=2;//not allowed

//Scope {}

accountEmail="kaj@gmail.com"
accountPassword="2345"
accountCity="Bhubaneswar"

console.log(accountId);

/*
Prefer not to use var because of issue in block and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
