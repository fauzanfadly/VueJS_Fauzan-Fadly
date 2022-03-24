# (13) Vue Component

## Resume
1. Pengertian Vue Component
2. Fungsi Pembantu pada Vue Component
3. Lifecycle pada Vue Component

### Pengertian Vue Component
* Adalah _Vue Instance_ yang dapat digunakan kembali dengan nama yang kita definisikan. Vue Component dapat digunakan lebih dari satu kali di tempat yang berbeda.

### Beberapa Dokumentasi pada Vue Component
* Beberapa dokumentasi yang terdapat pada Vue Component, yaitu :
  + Props => sebuah fasilitas pada komponen Vue yang berfungsi untuk meneruskan data berupa variabel dari induk (parent) ke anakan (child).
  + Emits => sebuah fasilitas pada komponen Vue yang berfungsi untuk meneruskan fungsi dari anakan (child) ke induk (parent).

### Lifecycle pada Vue Component
* Beberapa fungsi Lifecycle pada Vue Component, yaitu :
  + Created => Berlangsung setelah instance terbentuk dan sebelum DOM dirender.
  + Mounted => Berlangsung setelah DOM dirender.
  + Destroyed => Berlangsung sebelum instance dihancurkan.


## Task
1. Buatlah sebuah todo list dengan menggunakan **Komponen file tunggal**, beserta kondisi visual seperti gambar yang diberikan, dan dengan ketentuan berikut :
  > * Input todo yang lebarnya memenuhi layar.
  > * Input masing-masing item memiliki tombol Hapus dan Edit dengan fungsionalitasnya.
  > * Tampilan ketika tombol Edit ditekan, simpan perubahan setelah tombol Edit ditekan kembali.
  > * Jika tombol Hapus ditekan, maka list dibawahnya akan naik ke atas menggantikan.
  > * Tampilan tidak harus sama persis namun usahakan rapih, fungsionalitas Hapus dan Edit harus ada.


[Todo List Project](../12_Vue%20CLI/praktikum)

output :

![Output todo list file tunggal App.vue](screenshots/screenshot%20-%20todo_list.JPG)
