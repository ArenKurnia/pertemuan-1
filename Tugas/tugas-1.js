//Array Nama Lengkap
const myName = ["Aren", "Kurnia"];

//Map()
const newName = myName.map(function (myName) {
    return "1" + myName;
});
console.log(newName);

//Filter()
const filter = newName.filter(name => name.includes("i"));
console.log(filter);

//Find()
const myNickname = newName.find(name => name.includes("e"));
console.log(myNickname);

//Function welcome() dan parameter callback
function welcome(callback) {
    console.log("Selamat Datang ");
    callback();
};

//Panggil function welcome() dengan argumen berupa anonymous function 
//yang mencetak nilai dari variabel myNickname
welcome(function() {
    console.log(myNickname);
});