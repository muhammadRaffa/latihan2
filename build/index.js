"use strict";
let age = 25;
let nama = "1234";
let siswa = {
    nama: "faisal",
    umur: 18,
    ispelajar: false,
    alamat: "bogor"
};
siswa = {
    nama: "pajri",
    umur: 17,
    ispelajar: true,
};
const product1 = {
    id: 1,
    name: 'hp',
    price: 20000,
    ispremium: false
};
const product2 = {
    id: 2,
    name: 'pc',
    price: 20000,
    ispremium: false,
    note: "bagus"
};
const produk3 = {
    id: 1,
    produkName: "mobil",
    price: 100000,
    detail: {
        manufacture: "toyota",
        year: 2023
    }
};
console.log('pabrik', produk3.detail.manufacture);



//   login(): boolean {
//     if (this.id === 2) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   relogin(): boolean {
//     return this.login();
//   }
// }
