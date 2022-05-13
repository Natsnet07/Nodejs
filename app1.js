console.log(module);
const logger= require('./logger1')
//gives/displays the information of the logger module. 
console.log(logger);
//here we are exporting only a single function from the module logger so here
// the const logger is no longer a variable it's a function. So we can call it directly.
logger('Natsnet');


