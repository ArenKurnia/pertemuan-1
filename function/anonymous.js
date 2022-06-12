function fungsi1(callback1, callback2){
    console.log("Hai ");
    callback1();
    callback2();
}

//anonymous function
//fungsi yang tak bernama
fungsi1(
function(){
    console.log("Aren ");
},
function(){
    console.log("Cantik ");
}
);