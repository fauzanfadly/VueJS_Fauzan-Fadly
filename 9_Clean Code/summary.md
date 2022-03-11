# (9) Clean Code

## Resume
1. Pengertian Clean Code
2. Fungsi dan Kegunaan Clean Code
3. Beberapa Fungsi Pada Dokumentasi Clean Code

### Pengertian Clean Code
* Adalah format penulisan kode-kode yang baik, benar, rapih, dan terstruktur. Bertujuan untuk dapat lebih dibaca, dipahami, dan didokumentasikan.

### Fungsi dan Kegunaan Clean Code
* Beberapa fungsi dan kegunaan pada Clean Code antara lain :
  + Mempermudah kodingan untuk lebih mudah dibaca.
  + Mempermudah kodingan untuk lebih mudah dipahami pada tiap-tiap struktur kodenya.
  + Mempermudah pembuatan dokumentasi ketika dibutuhkan.
  + Menjadi salah satu indikator penilaian utama bagi para programmer handal atau pemula.

### Beberapa contoh penggunaan Clean Code
* Beberapa contoh penggunaan Clean Code pada Javascript :
  + Variable :
    ```
      // Penulisan yang buruk
      var nama = "Fauzan";

      // Penulisan yang baik
      const name = "Fauzan";
      let age = 21;
    ```
  + Penamaan Variable :
    ```
      // Penulisan yang buruk
      const useraddress = "";
      const is_active = true;

      // Penulisan yang baik
      const userAddress = "";
      const isActive = true;
    ```
  + Penamaan Function :
    ```
      // Penulisan yang buruk
      function my_function() {}
      function myjob() {}

      // Penulisan yang baik
      function myFunction() {}
      function myJob() {}
    ```
  + Penamaan Class :
    ```
      // Penulisan yang buruk
      class car {}

      // Penulisan yang baik
      class Car {}
    ```


## Task
1. (Problem 1 - Analysis) Kode berikut ini dituliskan tanpa mengikuti kebiasaan penulisan yang disarankan.
  > * Berapa banyak kekurangan dalam penulisan kode tersebut?
  > * Bagian mana saja terjadi kekurangan terjadi?
  > * Tuliskan alasan dari tiap kekurangan tersebut!
2. (Problem 2 - Rewrite) Kode berikut ini dituliskan tanpa mengikuti kebiasaan penulisan yang disarankan.
  > * Ubahlah penulisan kode berikut menjadi lebih terbaca dan rapih!

[problem_1.js](praktikum/problem_1.js) <br/>
[problem_2.js](praktikum/problem_2.js) <br/>

output :

![Output problem_2.js](screenshots/screenshot%20-%20problem_2.js%20.png)
