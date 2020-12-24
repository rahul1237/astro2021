const validator = require("validator")  //this is the package to check the string!
const chalk = require("chalk")  //this is the package to use diff colors in the console!


//                  process.argv -> this is used to take the input from the user!
//                          argv is the vector that contains the user input on the
//                          2 position wrt to its index position!

const user_input = process.argv[2]
if(user_input=='add'){
    console.log('data successfully added into the todo list!');
}else if(user_input=='delete'){
    console.log('data successfully deleted from the todo list!');
}else{
    console.log('AHAA! invalid input! :/');
}





//                     GENREAL

// console.log('hello this is rahul mahajan from adgitm aff to IPU');



//                     CHALK

// a="success"
// console.log(chalk.red.bold.inverse.bgWhite(a)); //inverse:- used to change the for->back ground color & vice-versa!





//                      VALIDATOR

// const mail="rahulmahajan403@.com"

// const bool=validator.isEmail(mail)
// if(bool){
//     console.log(bool+' ! '+mail+' is a valid e-mail');
// }else{
//     console.log(bool+' ! '+mail+" isn't a valid e-mail");
// }
