# (12) Vue CLI

## Resume
1. Pengertian Vue CLI
2. Komponen File Tunggal
3. Struktur Folder

### Pengertian Vue CLI
* Adalah _Tools_ atau perkakas standar untuk memudahkan penyetelan/pembuatan aplikasi Vue baru.

### Komponen File Tunggal
* Beberapa komponen yang terdapat pada file tunggal Vue CLI, yaitu :
  + `<template>` => merupakan tag komponen utama pada tampilan Web.
  + `<script>` => merupakan tag komponen untuk fungsi-fungsi dan pengoperasian javascript, khususnya dengan template framework VueJS.
  + `<style>` => merupakan tag komponen untuk CSS pada tampilan komponen tersebut.

### Struktur Folder
* Beberapa bagian pada struktur folder yang tersusun pada Vue CLI, yaitu :
  + folder root => berisikan konfigurasi untuk package Vue CLI yang sudah disediakan oleh NPM package installer.
  + node_modules => berisikan _Tools_ dan package yang berhubungan dengan Vue dan Node.js.
  + public => tempat dimana menyimpan index.html yang menjadi bagian HTML utama yang akan diakses pada URL utama.
  + src => berisikan folder assets untuk tempat penyimpanan gambar atau media lainnya, dan komponen Vue utama.


## Task
1. Buatlah sebuah todo list dengan menggunakan **Komponen file tunggal**, beserta kondisi visual seperti gambar yang diberikan, dan dengan ketentuan berikut :
  > * Memiliki sebuah input dan sebuah tombol.
  > * Menunjukkan list todo yang telah ditambahkan dan reset (kosongkan) input setelah tombol di klik.
  > * Jika list yang sudah dimasukkan sama dengan atau lebih besar dari 4, maka tunjukkan kata "Hebat!" di bawah input.

[App.vue](praktikum/src/App.vue)

output :

![Output todo list file tunggal App.vue](screenshots/screenshot%20-%20todo_list.JPG)
