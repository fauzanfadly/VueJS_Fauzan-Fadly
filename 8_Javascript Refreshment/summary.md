# (8) Javascript Refreshment

## Resume
1. Pengertian Javascript
2. Fungsi dan Kegunaan Javascript
3. Beberapa Fungsi Pada Dokumentasi Javascript

### Pengertian Javascript
* Javascript adalah bahasa pemrograman tingkat tinggi yang dinamis, dan biasanya digunakan pada pengembangan aplikasi berbasis web.

### Fungsi dan Kegunaan Javascript
* Beberapa fungsi dan kegunaan pada Javascript antara lain :
  + Membuat website menjadi lebih _Responsive_.
  + Mengembangkan aplikasi berbasis web dan mobile.
  + Menjalankan dan mengeksekusi Source Code Javascript pada sisi server.

### Beberapa Fungsi Pada Dokumentasi Javascript
* Beberapa dokumentasi dasar pada HTML meliputi :
  + Comment => Untuk membuat sebuah komentar.
    - Contoh :
      ```
        // Your comment...
      ```
  + Variables => Untuk menyimpan data sementara pada suatu variabel.
    - Contoh :
      ```
        var a = 10; // (var) Dapat dideklarasi ulang dan dapat diubah nilai variablenya
        let b = "Hello World"; // (let) Hanya dapat diubah nilai variablenya
        const c = [1, 2, 3]; // (const) Hanya dapat dideklarasi ulang
      ```
  + Operator => Untuk melakukan fungsi aritmatika dengan nilai angka.
    - Contoh : 
      ```
        var a = 1; // Inisialisasi nilai
        a += 1; // Menambahkan nilai
        a -= 1; // Mengurangi nilai
        a *= 1; // Perkalian nilai
        a /= 1; // Pembagian nilai
        a %= 1; // Modulus nilai
        a **= 1; // Eksponensial
        a++; // Kenaikan nilai
        a--; // Pengurangan nilai
      ```
  + Tipe Data => Untuk membedakan jenis-jenis tipe data nilai / _value_ pada suatu variable.
    - Contoh :
      ```
        var a; // Belum teridentifikasi
        var a = 5; // Integer atau Number
        var a = "Hello World"; // String
        var a = [1, 2, 3, 4, 5]; // Array
        var a = { nama : "Fauzan", umur : 21 }; // Object
      ```
  + Perulangan For => Untuk mengeksekusi suatu fungsi menggunakan perulangan dengan range tertentu.
    - Contoh :
      ```
        for (let angka = 0; angka < 10; angka++) {
          console.log("nilai angka : " + angka.toString());
        }
      ```
  + Perulangan For In => Untuk mengeksekusi suatu fungsi menggunakan perulangan pada iterasi array tertentu.
    - Contoh :
      ```
        // Mendeklarasi variable array
        const myArray = ["Fauzan", "Fadly", "Agnes"];

        // Melakukan perulangan pada element-element yang terdapat pada variable myArray
        for (let item in myArray) {
          console.log("Nama saya : " + item);
        }
      ```
  + Function => Untuk membuat sebuah fungsi yang dapat menyelesaikan perintah tertentu.
    - Contoh :
      ```
        // Pemanggilan Function untuk mengoperasikannya (bisa sebelum pendeklarasikan Function)
        beliBuah("Apel");

        // Pendeklarasian Function
        function beliBuah(namaBuah) {
          return console.log("Harga buah " + namaBuah + " yaitu : Rp10,000/Kg");
        }

        // Pemanggilan Function untuk mengoperasikannya (bisa setelah pendeklarasikan Function)
        beliBuah("Mangga");
      ```
  + Class => Untuk membuat sebuah grup yang berisikan object-object tertentu.
    - Contoh :
    ```
      // Membuat class Mahasiswa
      class Mahasiswa {

        // Membuat constructor untuk tiap property pada class Mahasiswa
        constructor(nama, nomorIndukMahasiswa, jurusan, prodi, status) {
          this.nama = nama;
          this.nomorIndukMahasiswa = nomorIndukMahasiswa;
          this.jurusan = jurusan;
          this.prodi = prodi;
          this.status = status;
        }

        // Contoh untuk  membuat method
        lulusMahasiswa(statuskelulusan) {
          console.log("Mahasiswa atas nama " + this.nama + " dinyatakan : " + statuskelulusan);
        }
      } 
    ```


## Task
1. Tulis ulang kode berikut, dan simpan dengan format javascript!
  > * Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console!
  > * Ubah kode diatas sehingga dapat menampilkan barus 22 di dalam console!
  > * Lakukan pemangilan untuk Function perkenalan pada baris 31!
  > * Kalian bebas mengubah kode di atas sehingga menampilkan output pada console seperti pada gambar berikut.
2. Jawab pertanyaan berikut sesuai dengan materi yang telah dijelaskan
  > * Jelaskan kenapa baris 21, 22, 23 tidak dapat tampil?
  > * Jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
  > * Dengan melakukan komen pada baris ke-26, apakah baris 28 dapat dieksekusi? Jelaskan!
3. Lakukan destucturing pada kode berikut sehingga Budi tersimpan dalam variable bernama a, Sita tersimpan dalam variable bernama b, dan Ayu tersimpan dalam variable bernama c!
4. Kalian memiliki sebuah variable berikut (`let bdays = ['10-17', '05-19', '20-19']`). Ubahlah tanda (-) dalam variable tersebut menjadi (/) sehingga output yang akan keluar dalam console menjadi `['10/17', '05/19', '20/19']`!
5. Kalian memiliki variable berikut (`let value = [1, 2, 3, 4, 5, 6]`). Kalikan setiap value dalam array tersebut dengan dua. Sehingga, ketika dipanggil variable value mengeluarkan output berupa `[2, 4, 6, 8, 10, 12]`!
6. Kalian memiliki variable berikut (`let arr = [1.5, 2.56, 5.1, 12.33]`). Bulatkan ke atas variable tersbut sehingga output yang dihasilkan adalah `[2, 3, 5, 12]`!

[praktikum_javascript.js](praktikum/praktikum_javascript.js)

output :

![Output praktikum_javascript.js](screenshots/screenshot%20-%20praktikum%20js.png)
