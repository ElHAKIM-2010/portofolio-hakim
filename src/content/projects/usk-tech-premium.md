---
title: "USK Tech Premium"
order: 1
category: "E-commerce · Elektronik"
summary: "Toko elektronik full-stack dengan katalog, akun, keranjang, checkout transfer bank, dan panel admin — dibangun dengan Next.js, TypeScript, Drizzle, dan Neon PostgreSQL."
status: "complete"
statusLabel: "Selesai · demo"
statusNote: "Proyek sekolah SMK RPL. Situs demo tayang dengan data contoh; bukan toko yang menerima transaksi nyata."
role: "Desain, frontend, backend, database"
year: "2026"
technologies:
  - Next.js
  - TypeScript
  - Tailwind CSS
  - Drizzle ORM
  - Neon PostgreSQL
  - Auth.js
  - Zod
preview:
  kind: "commerce"
  caption: "Tangkapan layar beranda dengan hero produk unggulan — data contoh."
  image:
    src: "/images/projects/usk/beranda-cover-1440.webp"
    srcSmall: "/images/projects/usk/beranda-cover-800.webp"
    width: 1440
    height: 1000
    alt: "Beranda USK Tech Premium: navigasi toko, judul 'Teknologi pilihan, tanpa kompromi', dan kartu produk unggulan."
links:
  demo: "https://usk-tech-premium.vercel.app"
  source: "https://github.com/ELHAKIM-2010/usk-tech-premium"
gallery:
  - src: "/images/projects/usk/katalog-1440.webp"
    srcSmall: "/images/projects/usk/katalog-800.webp"
    width: 1440
    height: 1800
    alt: "Halaman katalog dengan filter kategori, rentang harga, dan grid sembilan produk elektronik."
    caption: "Katalog: pencarian, filter kategori dan rentang harga, serta paginasi."
  - src: "/images/projects/usk/detail-1440.webp"
    srcSmall: "/images/projects/usk/detail-800.webp"
    width: 1440
    height: 1800
    alt: "Halaman detail iPhone 16 dengan harga, stok, pemilih jumlah, tabel spesifikasi, dan produk terkait."
    caption: "Detail produk: galeri, spesifikasi, stok, dan pemilih jumlah."
  - src: "/images/projects/usk/keranjang-1440.webp"
    srcSmall: "/images/projects/usk/keranjang-800.webp"
    width: 1440
    height: 1800
    alt: "Halaman keranjang berisi iPhone 16 dengan ringkasan subtotal dan tombol menuju checkout."
    caption: "Keranjang: isi tersimpan di perangkat dengan ringkasan harga."
  - src: "/images/projects/usk/checkout-1440.webp"
    srcSmall: "/images/projects/usk/checkout-800.webp"
    width: 1440
    height: 1800
    alt: "Form checkout dengan data penerima, alamat pengiriman, metode transfer bank, dan ringkasan pesanan."
    caption: "Checkout: data penerima, alamat, dan transfer bank manual."
---

## Ringkasan

USK Tech Premium adalah toko elektronik yang saya bangun dari nol sebagai proyek sekolah SMK jurusan RPL. Bukan hanya mockup: katalog, akun, keranjang, checkout, pesanan, dan panel admin berjalan di atas satu database. Situs ini tayang sebagai demo dengan data contoh, bukan toko yang menerima uang sungguhan.

## Masalah dan tujuan

Menjual elektronik berarti menjelaskan spesifikasi, stok, dan harga tanpa membuat pembeli tenggelam dalam detail. Tujuannya: katalog yang bisa disaring, halaman produk yang cepat dipindai, keranjang yang tidak kehilangan isi, checkout yang jelas, dan panel admin agar data produk bisa diperbarui tanpa menyentuh kode. Yang sama pentingnya: status pesanan dan pembayaran harus jujur, tidak berpura-pura sudah dibayar.

## Peran saya

Saya mengerjakan alurnya dari awal sampai tayang: arah visual, komponen antarmuka, skema database, autentikasi, validasi di server, panel admin, metadata SEO, dan deployment. Setiap fase diuji langsung di browser — register, menambah ke keranjang, checkout, sampai panel admin — sebelum dianggap selesai.

## Fitur yang berjalan

- **Katalog** dengan pencarian nama, filter kategori dan rentang harga, pengurutan, serta paginasi.
- **Halaman produk** berisi galeri, spesifikasi, harga, stok, pemilih jumlah, dan produk terkait.
- **Akun** dengan register dan login email/password; sesi disimpan sebagai JWT HttpOnly.
- **Keranjang** tersimpan di perangkat, tetapi harga dan stok selalu dihitung ulang di server.
- **Checkout** transfer bank manual: data penerima, alamat, validasi, pembuatan pesanan, dan pengurangan stok dalam satu transaksi.
- **Riwayat pesanan** beserta detail, dengan pemeriksaan kepemilikan agar pesanan orang lain tidak bisa dibuka.
- **Panel admin** untuk ringkasan, CRUD produk dan kategori, edit stok, serta pencarian dan perubahan status pesanan.
- **Keamanan** berupa pembatasan percobaan login, register, dan checkout, serta pemeriksaan role di server — bukan hanya di tampilan.
- **Tema terang dan gelap** yang bisa diganti dari navigasi, plus tata letak responsif.

## Teknologi yang dipakai

- **Next.js (App Router) + React + TypeScript** — routing, server components, server actions, dan tipe data dari database sampai komponen.
- **Tailwind CSS** — token warna, tipografi, dan tata letak; aksen lime dipakai hemat di atas dasar hitam, putih, dan abu-abu.
- **Auth.js (NextAuth)** — login kredensial dengan sesi JWT HttpOnly, ditambah kolom `role` untuk membedakan pelanggan dan admin.
- **Drizzle ORM + drizzle-kit** — skema dan migrasi database ditulis sebagai kode, bukan tabel yang dibuat manual di console.
- **Neon PostgreSQL + driver `pg`** — database produksi; koneksi pooled untuk aplikasi dan unpooled untuk migrasi. Checkout memakai transaksi dan row lock agar stok tidak terjual dua kali.
- **Zod** — validasi input di server untuk checkout, produk, kategori, dan autentikasi.
- **next/image** — gambar produk lokal dioptimalkan; tipografi memakai Sora dan Geist.
- **Vercel** — deployment produksi dengan auto-deploy dari branch `master`; kredensial database dan auth hanya ada di environment variables.
- **SEO** — metadata per halaman, canonical, Open Graph/Twitter, sitemap dinamis, robots, JSON-LD produk, dan `noindex` untuk halaman pribadi.

## Arsitektur dan alur data

Katalog dan panel admin membaca tabel yang sama: produk, kategori, pesanan, item pesanan, pengguna, dan rate limit. Keranjang di browser hanya menyimpan ID dan jumlah; saat checkout, server mengambil ulang harga dan stok dari database.

Urutan checkout: validasi input → buka transaksi → kunci baris stok → cek ulang harga dan ketersediaan → simpan pesanan dan snapshot item → kurangi stok → commit. Jika salah satu langkah gagal, transaksi dibatalkan. Snapshot item membuat riwayat pesanan tetap benar meskipun nama atau harga produk berubah kemudian.

## Keamanan dan batasan

Halaman admin memeriksa sesi dan role di server: pengunjung anonim diarahkan ke halaman masuk, sedangkan akun non-admin mendapat 404. Setiap aksi admin juga memeriksa ulang hak akses. Data kartu pembayaran tidak pernah disimpan karena pembayaran memakai transfer bank manual.

Rekening toko belum diatur, jadi halaman checkout menampilkan peringatan yang jelas alih-alih nomor rekening karangan. Karena ini proyek sekolah, situs tidak dipakai untuk transaksi nyata dan seluruh produk adalah data contoh.

## Tantangan dan solusi

- **Konsistensi katalog dan admin.** Keduanya memakai skema serta komponen yang sama, sehingga perubahan data langsung terlihat di dua tempat.
- **Stok saat checkout bersamaan.** Stok dikunci di dalam transaksi database dan diperiksa ulang sebelum pesanan dibuat.
- **Keranjang yang mudah dimanipulasi.** Harga dari browser tidak dipercaya; server selalu menghitung ulang dari database.
- **Cold start Neon free plan.** Request pertama bisa lambat; migrasi dan query ad-hoc memakai koneksi langsung agar tidak terkena `ECONNRESET`.
- **Spesifikasi panjang.** Informasi dipisah menjadi ringkasan dan tabel detail supaya halaman tetap bisa dipindai.

## Progres

Alur utama sudah selesai dan situs tayang di tautan demo. Kode sumber tersedia publik di GitHub. Proyek ini dibuat untuk laporan dan presentasi sekolah, bukan untuk operasi toko sungguhan; pembayaran, rekening, dan data produk masih berupa contoh.

## Yang saya pelajari

- Otorisasi harus diperiksa di server; menyembunyikan tombol di tampilan bukan keamanan.
- Transaksi database membuat aturan stok bisa dipercaya saat banyak permintaan datang.
- Data contoh yang konsisten membuat demo terasa nyata tanpa harus mengarang pencapaian.
