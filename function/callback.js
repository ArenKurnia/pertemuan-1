//callback function
//fungsi yang dijadikan arhumen fungsi lain
//kemudian dipanggil dari dalam fungsi itu

function fungsi1(callback1, callback2){
    console.log("Hai ");
    callback1();
    callback2();
}

function fungsi2(){
    console.log("Aren ");
};
function fungsi3(){
    console.log("Assalamualaikum ");
};

fungsi1(fungsi2,fungsi3);

function sapa(nama){
    console.log("Hai " + nama);
}
sapa("Aren");
