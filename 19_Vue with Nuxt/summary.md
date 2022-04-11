# (19) Vue with Nuxt

## Resume
1. Pengenalan Nuxt
2. SEO
3. PWA

### Pengenalan Nuxt
* Nuxt adalah kerangka kerja yang dibangun di atas Vue yang membuat pengembangan web menjadi sederhana dan ampuh.
* Struktur Direktori Nuxt :
  > * Pages : Router di Nuxt secara otomatis membaca direktori ini sehingga file yang ada di direktori /pages langsung terhubung menjadi path halaman.
  > * Layouts : setiap file di direktori /layouts akan membuat tata letak khusus yang dapat diakses dengan properti layout di komponen halaman.
  > * Static : semua file yang disertakan akan secara otomatis diekspose oleh Nuxt dan dapat diakses melalui URL root proyek.
* SSG (Static Site Generation) adalah metode pengembangan ini lebih cocok untuk situs web yang tidak memiliki halaman dinamis.
* SSR (Server Side Rendering) adalah metode pengembangan dengan solusi terbaik untuk proyek di mana halaman dibuat secara real time, yaitu melalui panel admin, misalnya halaman blog dan e-commerce.

### SEO
* SEO (Search Enging Optimization) adalah proses meningkatkan kualitas dan kuantitas lalu lintas situs web ke situs web atau halaman web dari mesin pencari.
* SEO Meta tag adalah tag tak terlihat di dalam `<head>` yang memberikan data tentang halaman ke mesin pencari dan pengunjung situs web.

### PWA
* PWA (Progressive Web Apps) adalah dibuat dan disempurnakan dengan API modern untuk menghadirkan peningkatan kemampuan, keandalan, dan kemudahan pemasangan sekaligus menjangkau siapa saja, di mana saja, di perangkat apa pun dengan basis kode tunggal.


## Task
1. Revactor aplikasi berita pada Latihan materi 8 (Vue UI Framework) menggunakan Nuxt
  > * Tambahkan fitur PWA.

[Directory project berita](./praktikum)

output :

![Output halaman (Light) daftar berita](./screenshots/screenshot%20-%20(light)%20daftar%20berita.jpg)
![Output halaman (Light) detail berita](./screenshots/screenshot%20-%20(light)%20detail%20berita.jpg)
![Output halaman (Dark) daftar berita](./screenshots/screenshot%20-%20(dark)%20daftar%20berita.jpg)
![Output halaman (Dark) detail berita](./screenshots/screenshot%20-%20(dark)%20detail%20berita.jpg)
