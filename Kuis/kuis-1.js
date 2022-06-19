//array
const namaSaya = ["Aren", "Kurnia", "Cantik"];

//map()
const map = namaSaya.map(function (namaSaya){
    return namaSaya + "a";
});
console.log(map);

//Array Destructuring
[namaDepan, namaTengah, namaBelakang] = namaSaya;
console.log(namaDepan, namaTengah, namaBelakang);

//Object Destructuring
const mahasiswa = {
    namaLengkap : "Aren Kurniaa Cantika",
    umur        : 21
}
console.log(mahasiswa);

//cara destructuring object
const{namaLengkap, umur} = mahasiswa;
console.log(namaLengkap);
console.log(umur);

//function
function cetak(cb){
    console.log(namaLengkap);
    cb();
}
//anonymous function
cetak(function(){
    console.log(umur);
});