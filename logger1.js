var url='http://localhost:8080';
function log(message){
    console.log(message);
}
//making the url and log function global which is going to be accessed globally by other modules...

module.exports=log;