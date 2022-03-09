var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log(
    "perkenalkan nama saya " +
    nama +
    " nomor urut " +
    a +
    " sekarang sedang mengikuti " +
    b +
    " berasal dari " +
    asal
  );
}

if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b; (Ini menyebabkan error)

// console.log("asal diakses = " + asal); (Ini menyebabkan error)
console.log("array = " + lengkap_arr[2].toString());
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();


// Jawaban
// No. 2 :
//    a. karena kondisi if-nya tidak terpenuhi dengan adanya variable (terdaftar) yang bernilai false.

//    b. karena variable (nama) merupakan variable tipe const, yaitu variable yang nilainya tidak dapat diubah lagi,
//       sehingga pendeklarasian nilainya hanya berlaku pada pendeklarasian pertama.

//    c. Tidak dapat dieksekusi, baris 26 dengan baris 28 sama sekali tidak saling memiliki keterkaitan.
//       Baris 26 memiliki kasus error yang berbeda dengan kasus error pada baris 28.
//       Penyebab error pada baris 28 adalah pemanggilan variable (asal), variable (asal) di deklarasi di dalam fungsi
//       atau Function (perkenalan()), sehingga variable (asal) hanya dapat dipanggil di dalam Function (perkenalan()).


// No. 3 : 
const foo = ['Budi', 'Sita', 'Ayu'];
const [x, y, z] = [foo[0], foo[1], foo[2]];

console.log([x, y, z]);


// No. 4 :
let bdays = ['10/17', '05/19', '20/19'];

console.log(bdays);


// No. 5 :
let value = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < value.length; index++) {
  value[index] *= 2;
}

console.log(value);


// No. 6 :
let arr = [1.5, 2.56, 5.1, 12.33];
for (let index = 0; index < arr.length; index++) {
  arr[index] = Math.round(arr[index]);
}

console.log(arr);