---
title: "Data Siswa"
order: 2
category: "Manajemen data"
summary: "Aplikasi CRUD data siswa dengan pencarian, formulir, dan tabel responsif — dibangun dengan Next.js, TypeScript, Tailwind CSS, dan MySQL."
status: "complete"
statusLabel: "Selesai · demo"
statusNote: "Demo tanpa login yang terhubung ke MySQL. Siapa pun bisa mengubah data, jadi jangan gunakan data pribadi sungguhan."
role: "Desain, frontend, backend, database"
year: "2026"
technologies:
  - Next.js
  - TypeScript
  - Tailwind CSS
  - MySQL (Aiven)
  - mysql2
preview:
  kind: "records"
  caption: "Ilustrasi antarmuka daftar — bukan tangkapan layar, agar data siswa tidak ditampilkan."
links:
  demo: "https://data-siswa-app.vercel.app"
  source: "https://github.com/ELHAKIM-2010/data-siswa-app"
---

## Ringkasan

Data Siswa adalah aplikasi administrasi untuk mencatat, mencari, memperbarui, dan menghapus data siswa. Berbeda dari mockup, versi ini benar-benar berjalan: data disimpan di MySQL dan setiap perubahan langsung tersimpan. Aplikasi dibuat sebagai proyek sekolah dan tersedia sebagai demo online.

## Masalah dan tujuan

Pencatatan yang tersebar di banyak berkas membuat pencarian dan pembaruan rawan duplikasi. Tujuannya: satu sumber data, pencarian cepat, formulir yang jelas, dan konfirmasi sebelum menghapus. Aplikasi diarahkan untuk memudahkan pekerjaan pengelola data, bukan menambah langkah baru.

## Fitur yang berjalan

- **Daftar siswa** dibaca langsung dari database, lengkap dengan jumlah total.
- **Pencarian** berdasarkan nama, NIS, kelas, atau jurusan.
- **Tambah data** melalui formulir dengan NIS, nama, kelas, dan jurusan.
- **Edit data** dengan formulir yang terisi otomatis, lalu disimpan ke database.
- **Hapus data** dengan konfirmasi sebelum dijalankan.
- **Statistik** total siswa, hasil pencarian, dan status koneksi database.
- **Refresh data** untuk mengambil ulang isi database.
- **Tampilan responsif**: tabel di layar lebar dan daftar kartu di ponsel.
- **Pesan status dan error** ketika penyimpanan berhasil atau koneksi bermasalah.
- **API** `GET`, `POST`, `PUT`, dan `DELETE` untuk seluruh operasi data.

## Teknologi yang dipakai

- **Next.js 16 (App Router) + React 19 + TypeScript** — halaman utama sebagai client component, dengan tipe data siswa dari formulir sampai API.
- **Tailwind CSS 4** — tata letak, tabel, formulir, dan tampilan kartu di ponsel.
- **Route Handlers Next.js** — endpoint `/api/siswa` dan `/api/siswa/[id]` untuk membaca dan mengubah data.
- **MySQL di Aiven + `mysql2`** — database produksi dengan connection pool dan query berparameter.
- **Vercel** — deployment demo; kredensial database disimpan sebagai environment variables.
- **SQL langsung tanpa ORM** — query `SELECT`, `INSERT`, `UPDATE`, dan `DELETE` ditulis eksplisit agar alurnya mudah dipelajari.

## Arsitektur dan alur data

Halaman mengambil daftar lewat `GET /api/siswa`, lalu menyimpan hasilnya di state React. Pencarian dilakukan di sisi klien atas data yang sudah dimuat. Saat menambah atau mengedit, formulir dikirim ke API, server memvalidasi field, menjalankan query, lalu halaman memuat ulang data dari database.

Setiap operasi memakai query berparameter, bukan menyusun SQL dari input pengguna. NIS yang duplikat ditolak oleh aturan database dan dikembalikan sebagai pesan error. ID pada operasi edit dan hapus juga diperiksa sebelum query dijalankan.

## Keamanan dan batasan

Aplikasi ini belum memiliki autentikasi. Artinya siapa pun yang membuka tautan demo dapat melihat, menambah, mengubah, dan menghapus data. API juga terbuka tanpa login. Karena itu demo ini hanya cocok untuk latihan dan data contoh — jangan memasukkan data pribadi siswa sungguhan.

Di sisi server sudah ada validasi field wajib, pemeriksaan ID, query berparameter, dan penanganan NIS duplikat. Semua itu mencegah input kosong dan kesalahan query, tetapi tidak menggantikan autentikasi dan pembatasan akses. Daftar juga dimuat sekaligus tanpa paginasi, sehingga cocok untuk jumlah data kecil.

## Tantangan dan solusi

- **Menghubungkan Next.js ke MySQL Aiven.** Solusinya connection pool `mysql2` dengan konfigurasi SSL dan kredensial dari environment variables.
- **Mencegah NIS ganda.** Database menolak duplikat, lalu API mengubahnya menjadi pesan yang bisa dibaca pengguna.
- **Tabel yang sempit di ponsel.** Tabel diganti daftar kartu pada layar kecil agar nama dan aksi tetap terbaca.
- **State setelah perubahan.** Setiap tambah, edit, atau hapus diikuti pemuatan ulang dari server agar tampilan tidak berbeda dengan database.
- **Koneksi database gagal.** Halaman menampilkan status bermasalah dan pesan yang menjelaskan penyebabnya.

## Progres

Aplikasi sudah tayang di tautan demo dan kode sumbernya tersedia publik. Proyek ini dibuat untuk latihan administrasi data di sekolah. Karena belum ada login, aplikasi tidak ditujukan untuk menyimpan data siswa nyata.

## Yang saya pelajari

- Validasi harus dilakukan di server, bukan hanya lewat atribut formulir.
- Query berparameter dan connection pool membuat akses database lebih aman dan rapi.
- Aplikasi CRUD tanpa autentikasi bukan aplikasi administrasi yang siap dipakai.
