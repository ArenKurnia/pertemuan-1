function fungsi1(callback1, callback2){
    console.log("Hai ");
    callback1();
    callback2();
}
//Anonymous arrow function
fungsi1(
    ()=>console.log("Assalamualaikum "),
    ()=>console.log("Aren ")
    );