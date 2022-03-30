# (15) Vue Data

## Resume
1. Data Fetching
2. Penanganan Data Error
3. Validasi Data dan Autentikasi

### Data Fetching
* Data Fetching adalah pengambilan data oleh program perangkat lunak dan skrip.
* Axios adalah sebuah package yang dipakai Frontend untuk melakukan HTTP Request kepada URL API Endpoint.
* Request adalah pengambilan data dengan menggunakan Request Quest sebagai pembantu syarat pengambilan data.

### Penanganan Data Error
* Penanganan Data Error adalah metode untuk mengatasi error yang akan terjadi saat terjadinya data error.
* Try-Catch-Finally / Promise adalah salah satu fungsi metode penanganan error yang disediakan oleh Javascript.

### Validasi Data dan Autentikasi
* Penyimpanan Global Permanen adalah konsep untuk melakukan pengecekan terhadap data apakah sudah sesuai dengan kriteria atau belum, terutama pada input pengguna.
* Fungsi validasi ialah menerima nilai yang ingin dicek kemudian mengembalikan nilai validity berupa nilai boolean.
* Autentikasi adalah suatu proses yang menjadi tindakan atau pembuktian (validasi) terhadap indetitas pengguna ketika ingin memasuki dan mengakses sistem tertentu.


## Task
1. Buatlah sebuah aplikasi berita dengan bantuan https://newsapi.org/
  > * Dengan kondisi dan contoh visual sesuai dengan gambar.
  > * Registrasi terlebih dahulu, setelah login akan mendapat ApiKey untuk fetch data ke https://newsapi.org/ .
  > * Jenis berita tidak ditentukan, bebas saja memilih kategori apapun untuk ditampilkan.
2. Usahakan untuk sebaik mungkin menggunakan ilmu yang telah didapatkan di materi-materi sebelumnya. seperti: Media Queries, store, persisted-state, dll...
3. Jika salah satu berita ditekan, maka akan mengarah ke detail berita, di mana terdapat konten.

[Project Aplikasi Berita](../15_Vue%20Data/praktikum)

output :

![Output halaman daftar berita](./screenshots/screenshot%20-%20daftar%20berita.jpg)
![Output halaman detail berita](./screenshots/screenshot%20-%20detail%20berita.jpg)
