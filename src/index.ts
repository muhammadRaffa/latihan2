// // let age : number = 25;
// // let nama : string = "1234"

// // let siswa: {
// //     nama: string;
// //     umur: number;
// //     ispelajar: boolean;
// //     alamat? : string
// // } = {
// //     nama: "faisal",
// //     umur: 18,
// //     ispelajar: false,
// //     alamat : "bogor"
// // };

// // siswa = {
// //     nama: "pajri",
// //     umur: 17,
// //     ispelajar: true,
// // }

// // // interface untuk mendefinisikan tipe data object

// // interface produk {
// //     id : number
// //     name : string
// //     price : number
// //     note? : string
// //     ispremium : boolean
// // }

// // const product1 : produk = {
// //     id : 1,
// //     name : 'hp',
// //     price : 20000,
// //     ispremium : false

// // }

// // const product2 : produk = {
// //     id : 2,
// //     name : 'pc',
// //     price : 20000,
// //     ispremium : false,
// //     note : "bagus"
// // }

// // // nested object

// // interface produkDetail {
// //     manufacture : string,
// //     year: number
// // }

// // interface produkItem {
// //     id: number
// //     produkName : string
// //     price : number
// //     detail : produkDetail
// // }

// // const produk3 : produkItem = {
// //     id : 1,
// //     produkName : "mobil",
// //     price : 100000,
// //     detail : {
// //         manufacture : "toyota",
// //         year : 2023
// //     }
// // }

// // console.log('pabrik', produk3.detail.manufacture);

// // const produk4 : produkItem = {
// //     id : 2,
// //     produkName : "motor",
// //     price : 2000,
// //     detail : {
// //         manufacture : "honda",
// //         year : 2021
// //     }
// // }

// // console.log('toko', produk4.detail);

// // // array

// // const angka = [0,1,2,3]

// // // cara mendefinisikan tipe array di ts menggunakan square bracket

// // let a : number[]
// // a = [1,2,3]

// // let b : string[]
// // b = ['jamil', 'haris','paisal']

// // let c : (string | number | boolean)[]
// // c = [1,'satu', 2, false]

// // // soal 1

// // let identitas = {
// //     nama: "ucup",
// //     tempat: "jonggol",
// //     umur: 20,
// //     anak: [
// //        {nama: "a", umur: 12},
// //        {nama: "b", umur: 17, isSekolah: true},
// //     ],
// // };

// // // jawaban soal 1

// // let dataDiri = [
// //     {
// //         nama: "pulan",
// //         alamat: "indonesia",
// //         umur: 20,

// //         status : [{
// //             isSekolah:false,
// //         },
// //     ]
// //     }
// // ]

// // interface dataDiri {
// //     nama: string,
// //     alamat: string,
// //     umur: number,
// // }

// // // 5

// // let namaj :(string | number)[] = ['bagas', 'dani', 1,2,3]

// // function

// // function penjumlahan () {
// //     // kode yg akan dijalankan
// //     return "ok"
// }

// rumus persegi panjang

// function rumusLuasPP(panjang: number, lebar: number){
//     const luas = panjang * lebar;
//     return luas;
// }

// console.log(penjumlahan());

// const persegi1 = rumusLuasPP(10, 2);
// const persegi2 = rumusLuasPP(11, 3);
// const persegi3 = rumusLuasPP(12, 4);

// console.log(persegi1);
// console.log(persegi2);
// console.log(persegi3);

// soal function luas balok function: rumus

// function perkalian () {
//     return "ok"
// }

// function volumeBk(panjang: number, lebar: number, tinggi: number){
//     const volume  = panjang * lebar * tinggi;
//     return volume;
// }

// console.log(perkalian());

// const balok1 = volumeBk(15, 2 ,3);
// const balok2 = volumeBk(10, 3 ,5);

// console.log(balok1);

// // versi ts

// function penjumlahan(a: number, b:number, c = 0 )
// {
//  const hasil = a + b + c;
//  return hasil;
// }

// const hasil1 = penjumlahan(10, 5, 2);
// const hasil2 = penjumlahan(12, 3, 1);

// console.log(hasil1, hasil2);

// // pembagian

// function pembagian({a, b, c = 1}: {
//     a: number; b: number; c?: number;
// }) {
//     const hasil = (a/b) * c;
//     return hasil
// }

// const kali1 = pembagian({a: 5, b:15, c:4});
// const kali2 = pembagian({ b:10, a:15});

// console.log("kali1", kali2);
// console.log("kali2", kali2);

// versi typescript
interface satu {
  a: string;
  b: number;
}

function withOutReturn({ a, b }: { a: number; b: number }): void {
  console.log(a, b);
}

function kloPakaiNumber({ a, b }: { a: number; b: number }): number {
  return 80;
}

function MemakaiBollean({ a, b }: { a: number; b: number }): boolean {
  return true;
}

interface response {
  item: string;
  buy: number;
}

function contoh({ a, b }: satu): response {
  return {
    item: "baju",
    buy: 400,
  };
}

console.log(contoh({ a: "koma", b: 1 }));

// //buatlah sebuah function untuk mengecek apakah suatu bilangan ada atau tidak dalam suatu array dan memiliki retrun true atau false contoh kita memiliki
// // array [1,2,3,4,5,6] , apakah 3 ada didalam array

// // soal

// function iniNumberArray  (a: number [], b: number): boolean {
//     return a. includes(b);
// }

// const angka = [1,2,3,4,5,6];
// const cekAngka  = 3 ;

// const hasil = iniNumberArray(angka, cekAngka)
// console.log(hasil);

// contoh class di typescript

// class user {
//   id: number;
//   Name: string;
//   Pleace: string;

//   constructor(id: number, Name: string, pleace: string) {
//     (this.id = id), (this.Name = Name), (this.Pleace = pleace);
//   }

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

// const player = new user(2, "adi", "jakarta");

// console.log(player);

// console.log(player.login);

//buatlah method login jika username dan password yang dikirimkan ada di dalam array user maka berikan pesan status berhasil message anda berhasil login
// jika gagal berikan pesan status gagal, message username dan password berbeda

// class profile {
//   peserta: {
//     username: String;
//     password: String;
//   }[];

//   constructor() {
//     this.peserta = [
//       {
//         username: "adi",
//         password: "1111",
//       },

//       {
//         username: "iwan",
//         password: "2222",
//       },

//       {
//         username: "azis",
//         password: "3333",
//       },

//       {
//         username: "soleh",
//         password: "4444",
//       },
//     ];

//     interface LoginRespon {
//         status: string;
//         message: string;

//     }

//   }

// }

// interface Peserta {
//   username: string;
//   password: string;
// }

// interface LoginResponse {
//   status: string;
//   message: string;
// }

// class Profile {
//   peserta: Peserta[];

//   constructor() {
//     this.peserta = [
//       {
//                 username: "adi",
//                 password: "1111",
//               },

//               {
//                 username: "iwan",
//                 password: "2222",
//               },

//               {
//                 username: "azis",
//                 password: "3333",
//               },

//               {
//                 username: "soleh",
//                 password: "4444",
//               },
//     ];
//   }

//   login(username: string, password: string): LoginResponse {
//     const user = this.peserta.find(
//       (peserta) =>
//         peserta.username === username && peserta.password === password
//     );

//     if (user) {
//       return {
//         status: "berhasil",
//         message: "kamu berhasil login",
//       };
//     } else {
//       return {
//         status: "gagal",
//         message: "Username & password berbeda",
//       };
//     }
//   }
// }

// // Contoh penggunaan

// const profileInstance = new Profile();
// console.log(profileInstance.login("adi", "1111"));
// console.log(profileInstance.login("adi", "wrongpassword"));

// SUB CLASS
// merupakan turunan dari class baik itu property maupun method

class Smartphone {
  color: string;
  brand: string;
  model: string;
  isTKDn: boolean;

  constructor(color: string, brand: string, model: string) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.isTKDn = true;
  }

  charging(): void {
    console.log(`Smartphone ${this.model} lagi di ces`);
  }
}

const samsung = new Smartphone("black", "samsung", "s22");
console.log("samsung", samsung);

// sub class akan menemukan sifat dan perilaku dari class
// class huruf pertamanya harus huruf kapital

// class Android extends Smartphone {
//   splitscreen() {
//     console.log("split screen berfungsi");
//   }
// }

// const xiaomi = new Android("black", "xiaomi", "11");
// console.log("xiaomi", xiaomi);
// xiaomi.charging();
// xiaomi.splitscreen();

// class Ios extends Smartphone {
//   airdrop() {
//     console.log("air drop berfungsi");
//   }
// }

// const iphone = new Ios("black", "iphone", "11");
// console.log("iphone", iphone);
// iphone.charging();
// iphone.airdrop();

// polymorphism

// merupakan suatu keadaan dimana subclass ingin mengubah sifat atau perilau dari class

// class Android2 extends Smartphone {
//   layar: number;

//   constructor(color: string, brand: string, model: string, layar: number) {
//     super(color, brand, model);
//     this.layar = layar;
//   }

// splitScreen() {
//   console.log("alhamdulillah berfungsi");
// }

// charging() {
//   console.log("batrai penuh");
// }

//   showBrand() {
//     console.log(`merek hp ini adalah ${this.brand} dan layarnya ${this.layar}`);
//   }

//   charging(): void {
//     super.charging();
//     console.log(`hp ${this.brand} lagi di ces`);
//   }
// }

// const vivo = new Android2("black", "vivo", "11", 6);
// console.log("vivo", vivo);

// vivo.charging();
// vivo.splitScreen();
// vivo.showBrand();
// vivo.charging();

// latihan soal hari RABU

function minimal(a: number, b: number): number {
  return a > b ? b : a;
}

const min = minimal(1, 4);
const min2 = minimal(3, 2);

console.log(min);
console.log(min2);

//soal 2

function power(a: number, b: number): number {
  return Math.pow(a, b);
}
const pow = power(2, 3);
const pow2 = power(3, 2);
console.log(pow);
console.log(pow2);

// soal 3


// soal 4

class animal {
  nama: string;
  umur: number;
  isMamal: boolean;

  constructor(nama: string, umur: number, isMamal: boolean) {
    this.nama = nama;
    this.umur = umur;
    this.isMamal = isMamal;
  }
}

const myanimal = new animal("bebek", 3, false);
console.log(myanimal);

// soal 5

class Rabiit extends animal {
  constructor(nama: string, umur: number, isMamal: boolean) {
    super(nama, umur, isMamal);
  }
  eat(): void {
    console.log(
      `Rabiit ${this.nama} lagi makan dan umurnya ${this.umur} tahun dan mamalnya ${this.isMamal}`
    );
  }
}

const myrabiit = new Rabiit("kelinci", 5, true);
console.log(myrabiit);
myrabiit.eat();

//soal 6
class Eagle extends animal {
  speed: number;

  constructor(nama: string, umur: number, isMamal: boolean, speed: number) {
    super(nama, umur, isMamal);
    this.speed = speed;
  }
  run(): void {
    console.log(
      `ini ${this.nama} dan umurnya ${this.umur} tahun dan kecepatannya ${this.speed}`
    );
  }
}

const myeagle = new Eagle("elang", 5, true, 220);
console.log(myeagle);
myeagle.run();

// soal 7

class Eaglerun extends Eagle {
  constructor(nama: string, umur: number, isMamal: boolean, speed: number) {
    super(nama, umur, isMamal, speed);
  }
  run(): void {
    console.log(`ini ${this.nama} dan umurnya ${this.umur} tahun `);
  }

  runEagle(): void {
    console.log(`ini ${this.nama} dan kecepatannya ${this.speed}`);
  }
}

const myEaglerun = new Eaglerun("elang", 5, true, 220);
console.log(myEaglerun);
myEaglerun.runEagle();
