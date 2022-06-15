// Object Destructuring
let mahasiswa = {
    nama: 'Ari Sandi Shefa Maldini',
    umur: 20
   }

   //Cara Biasa
   //let nama = mahasiswa.nama;
   //let umur = mahasiswa.umur;


   //Cara Destructuring
   let {nama, umur} = mahasiswa;

   
   console.log(nama);
   // output: "Ari Sandi Shefa Maldini"
   console.log(umur);
   // output: 20
   