# (14) Vue Helpers

## Resume
1. Navigasi Vue dan Template Layout
2. Penyimpanan Global
3. Penyimpanan Global Permanen

### Navigasi Vue dan Template Layout
* Navigasi Adalah kegiatan berpindah tempat dari satu halaman ke halaman lain.
* Vue Router adalah suatu package yang berfungsi untuk menyediakan fungsi navigasi pada aplikasi Vue kita.
* Layout adalah susunan tata letak, sedangkan layout template pada Vue adalah komponen yang dapat dipakai sebagai susunan tata letak dasar yang membungkus masing-masing halaman.

### Penyimpanan Global
* Penyimpanan Global Adalah metode untuk menyimpan variable yang dapat diakses dengan mudah diseluruh bagian aplikasi dengan mudah di seluruh bagian aplikasi.
* Vuex adalah suatu package yang berfungsi untuk menyediakan beberapa fungsi penyimpanan global yang dapat diterapkan pada aplikasi Vue kita.

### Penyimpanan Global Permanen
* Penyimpanan Global Permanen adalah metode tambahan untuk penyimpanan global yang dapat disimpan ketika aplikasi dimuat ulang atau ditutup, sehingga kita masih bisa mengakses variable-variable tersebut.
* Vue Persisted State adalah suatu package yang berfungsi untuk menyediakan beberapa fungsi dalam mengimplementasiakn Penyimpanan Global Permanen pada aplikasi Vue kita.


## Task
1. Buatlah sebuah todo list dengan menggunakan **Komponen file tunggal**, beserta kondisi visual seperti gambar yang diberikan, dan dengan ketentuan berikut :
  > * Input todo yang lebarnya memenuhi layar.
  > * Input masing-masing item memiliki tombol Hapus dan Edit dengan fungsionalitasnya.
  > * Tampilan ketika tombol Edit ditekan, simpan perubahan setelah tombol Edit ditekan kembali.
  > * Jika tombol Hapus ditekan, maka list dibawahnya akan naik ke atas menggantikan.
  > * Tampilan tidak harus sama persis namun usahakan rapih, fungsionalitas Hapus dan Edit harus ada.
2. Ketika dimuat ulang, daftar item todolist tidak hilang, melainkan masih tersimpan.
3. Ketika diklik salah satu itemnya, ia akan berpindah halaman ke detail pada tiap itemnya.
  > * Memiliki input deskripsi untuk tiap itemnya.

[Todo List Project](../12_Vue%20CLI/praktikum)

output :

![Output halaman todo list](./screenshots/screenshot%20-%20todo_list.jpg)
![Output halaman item detail](./screenshots/screenshot%20-%20item_detail.jpg)
