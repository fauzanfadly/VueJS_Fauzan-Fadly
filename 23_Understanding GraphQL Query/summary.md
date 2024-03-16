# (23) Understanding GraphQL Query

## Resume
1. GraphQL Overview
2. Hasura & Heroku
3. Apollo

### GraphQL Overview
* GraphQL adalah bahasa query untuk API, dan runtime server-side untuk mengeksekusi queries dengan menggunakan sistem tipe yang ditentukan untuk beberapa data. GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan. Dengan GraphQL, kita dapat menggunakan satu endpoint (/graphql) tunggal untuk setiap permintaan yang diperlukan.
* Query adalah fungsi untuk mendapatkan data berdasarkan query tertentu yang didefinisikan.
* Mutation adalah fungsi untuk melakukan insert, update, dan delete data.
* Subscription adalah fungsi untuk mengambil data yang terupdate secara realtime berdasarkan event tertentu.

### Hasura & Heroku
* Hasura adalah layanan yang menyediakan GraphQL dan REST API. Dikelola penuh di hasura cloud atau self-hosted.
* Heroku adalah platform cloud sebagai layanan yang mendukung bahasa pemrograman server. Heroku juga menyediakan database postgres dengan gratis.

### Apollo
* Apollo Client adalah sebuah library Javascript untuk mempermudah menggunakan GraphlQL di sisi Frontend. Ketika menggunakan Apollo Client akan lebih mudah dan cepat karena di dalamnya tersedia fitur yang sering di butuhkan oleh Frontend.


## Task
soal tugas terdapat pada link berikut : [Link tugas](https://docs.google.com/document/d/1adlkVrgw52__qGZdXFAJoCuCCA0xCq8tSyArmNAjeOY/edit?usp=sharing)

[Directory project GraphQL Query](./praktikum)

output :

![Output screenshot tugas](./screenshots/screenshot%20-%20query%20daftar%20anggota.jpg)
![Output screenshot tugas](./screenshots/screenshot%20-%20input%20search%20query%20dari%20daftar%20anggota.jpg)